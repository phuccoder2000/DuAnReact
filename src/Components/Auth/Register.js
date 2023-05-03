import { useNavigate } from 'react-router-dom'
import './Register.scss'
import { VscEye, VscEyeClosed } from "react-icons/vsc"
import { useState } from 'react'
import { toast } from 'react-toastify';
import { postRegister } from "../../services/apiService"
import BGregister from '../../assets/BGregister.webp'
const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login");
    }
    const [isshowPassword, setIsshowPassword] = useState(false)

    const handleRegister = async () => {
        // validate
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        }
        const isValidateEmail = validateEmail(email)
        if (!isValidateEmail) {
            toast.error('Invalid Email')
            return;
        }
        if (!password) {
            toast.error('Invalid Password')

            return;
        }
        //summitAPI
        let data = await postRegister(email, password, username)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/login')

        }
        if (data && data.EC !== 0) {

            toast.error(data.EM)
        }
    }

    return (
        <div className='group-register'>
            <div className='content-register'>
                <h1 className='title-h1'>Sign up <br />
                    and come on in
                </h1>
                <img src={BGregister}></img>
                <div className='title-h3'>&copy; Phuccoder2000</div>
            </div>
            <div className="register-container">
                <div className="header">
                    <span>Alerady have an account?</span>
                    <button onClick={() => handleLogin()}>Login</button>
                </div>
                <div className="title mx-auto col-4" >
                    Phuccoder2000
                </div>
                <div className="welcome mx-auto col-4">
                    Get better data with conversational forms, surveys, quizzes & more.
                </div>
                <div className="content-form mx-auto col-4">
                    <div className='form-group '>
                        <label>Email</label>
                        <input
                            type={"email"}
                            className='form-control'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='form-group pass-group'>
                        <label>password</label>
                        <input
                            type={isshowPassword ? "text" : "password"}
                            className='form-control'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {isshowPassword ?
                            <span
                                className='icons-eye'
                                onClick={() => setIsshowPassword(false)}>
                                <VscEye />
                            </span>
                            : <span
                                className='icons-eye'
                                onClick={() => setIsshowPassword(true)}>
                                <VscEyeClosed />
                            </span>
                        }
                    </div>
                    <div className='form-group '>
                        <label>Username</label>
                        <input
                            type={"username"}
                            className='form-control'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <span className='forgot-password'>Forgot password ?</span>
                    <div>
                        <button className='btn-summit' onClick={() => handleRegister()}>
                            Create my free account
                        </button>
                    </div>
                    <div className=' text-center'>
                        <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to back HomePage</span>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Register