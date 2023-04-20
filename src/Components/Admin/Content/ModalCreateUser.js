import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const ModalCreateUser = (props) => {
    const { show, setShow } = props
    const handleClose = () => {
        setShow(false);
        setEmail('');
        setpassword('');
        setRole('USER');
        setImage('');
        setPreviewImage('');

    }
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("USER")
    const [previewImage, setPreviewImage] = useState('')
    const [image, setImage] = useState("")



    const hendleUpLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("");
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const HandSubmitCreateUser = async () => {
        // validate

        //call API
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image
        // }
        // console.log(data)


        const isValidateEmail =validateEmail (email)
        if(!isValidateEmail){
            toast.error('Invalid Email')

            return;
        }
        if(!password){
            toast.error('Invalid Password')
            return;
        }

        //submit data


        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("username", username);
        data.append("role", role);
        data.append("userImage", image);

        const res = await axios.post('http://localhost:8081/api/v1/participant', data)
        console.log("check data", res.data)
        if(res.data && res.data.EC ===0){
            toast.success(res.data.EM)
            handleClose()
        }
        if(res.data && res.data.EC !== 0){
            toast.error(res.data.EM)
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setpassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)
                            }
                                value={role}>
                                <option selected value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>

                        </div>
                        <div className='col-md-12'>
                            <label className="form-label lable-upload" htmlFor='lableUpload'>
                                <FcPlus />
                                Load file Image
                                <input
                                    type='file'
                                    id="lableUpload" hidden
                                    onChange={(event) => hendleUpLoadImage(event)}
                                ></input>
                            </label>
                        </div>
                        <div className='col-md-12 img-preview'>
                            {
                                previewImage ?
                                    <img src={previewImage}></img>
                                    : <span>Preview Imgae</span>
                            }


                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => HandSubmitCreateUser()}>
                        Save Changes
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser