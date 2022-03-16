import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ModalLogin from './ModalLogin';
import { connect } from 'react-redux';

class Navbar extends React.Component {

    state = {
        modalOpen: false
    }

    handleModalLogin = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    render() {
        return (
            <div className='row'>
                <ModalLogin
                    modalOpen={this.state.modalOpen}
                    handleModal={this.handleModalLogin}
                />
                <div className='col-12 col-md-6 align-self-center'>
                    <Link to="/" className='m' style={{ textDecoration: "none" }}>
                        <h3 className='sefruit-main-dark px-3' >
                            Sefruit
                        </h3>
                    </Link>
                </div>
                <div className="col-12 col-md-6">
                    <div className='row'>
                        <div className='col-4 sefruit-bg-main-light py-3'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <FontAwesomeIcon icon={faBars} className='sefruit-font-size-20 sefruit-main-dark' />
                            </div>
                        </div>
                        <div className='col-4 sefruit-bg-dark-grey py-3'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <FontAwesomeIcon icon={faBasketShopping} className='sefruit-font-size-20 sefruit-main-dark' />
                            </div>
                        </div>
                        <div className='col-4 sefruit-bg-light-grey py-3'>
                            <div className='d-flex flex-wrap justify-content-center align-items-center h-100 sefruit-main-dark'>
                                <h4>{this.props.username}</h4>
                                <button
                                    className="btn btn-outline-info"
                                    onClick={this.handleModalLogin}
                                >
                                    Login
                                </button>
                                <Link to="/register">
                                    <button className="btn btn-light">Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}

export default connect(mapToProps)(Navbar);