import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);

    const HandleSummitDeleteUser = () => {
        alert('me')
    }
    console.log(props.dataDelete)
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the user ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user:  email = <b>
                    {dataDelete && dataDelete.email ? dataDelete.email : ""}
                </b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CanCel
                    </Button>
                    <Button variant="primary" onClick={() => HandleSummitDeleteUser()}>
                        Confrim
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser