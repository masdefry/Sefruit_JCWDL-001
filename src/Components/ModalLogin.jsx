import axios from 'axios';
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { API_URL } from '../Supports/helper';

// Import untuk penggunaan redux
import { useDispatch } from "react-redux";
import { loginAction } from '../redux/actions/userAction';

const ModalLogin = (props) => {
    // dispatch hooks untuk menjalankan action dari redux
    const dispatch = useDispatch();

    // Penampung data login
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const handleLogin = () => {
        //     console.log("Input EMAIL login ->", email)
        //     console.log("Input PASSWORD login ->", password)
        axios.get(API_URL + `/users?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data);
                dispatch(loginAction(res.data[0]));
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <Modal isOpen={props.modalOpen}>
            <ModalHeader>
                Login Account
            </ModalHeader>
            <ModalBody>
                <div>
                    <label className='form-label'>Email</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className='form-label'>Password</label>
                    <div className='input-group'>
                        <input type="password" className="form-control" onChange={(element) => setPassword(element.target.value)} />
                        <span className='input-group-text'>Show</span>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button type='button' color='danger' outline onClick={props.handleModal}>
                    Cancel
                </Button>
                <button type='button' className='btn btn-info' onClick={handleLogin}>
                    Login
                </button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalLogin;