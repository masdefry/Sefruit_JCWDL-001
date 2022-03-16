import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalLogin = (props) => {

    // Penampung data login
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    return (
        <Modal isOpen={props.modalOpen}>
            <ModalHeader>
                Login Account
            </ModalHeader>
            <ModalBody>
                <div>
                    <label className='form-label'>Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label className='form-label'>Password</label>
                    <div className='input-group'>
                        <input type="password" className="form-control" />
                        <span className='input-group-text'>Show</span>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button type='button' color='danger' outline onClick={props.handleModal}>
                    Cancel
                </Button>
                <button type='button' className='btn btn-info'>
                    Login
                </button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalLogin;