import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-md-6 align-self-center'>
                    <Link to="/" className='m' style={{ textDecoration: "none" }}>
                        <h3 className='sefruit-main-dark px-3' >
                            Sefruit
                        </h3>
                    </Link>
                </div>
                <div className="col-12 col-md-6 row p-0">
                    <div className='col-4 sefruit-bg-main-light py-3'>
                        <div className='row justify-content-center align-items-center h-100'>
                            <FontAwesomeIcon icon={faBars} className='sefruit-font-size-20 sefruit-main-dark' />
                        </div>
                    </div>
                    <div className='col-4 sefruit-bg-dark-grey py-3'>
                        <div className='row justify-content-center align-items-center h-100'>
                            <FontAwesomeIcon icon={faBasketShopping} className='sefruit-font-size-20 sefruit-main-dark' />
                        </div>
                    </div>
                    <div className='col-4 sefruit-bg-light-grey py-3'>
                        <div className='d-flex flex-wrap justify-content-center align-items-center h-100 sefruit-main-dark'>
                            <button className="btn btn-outline-info">Login</button>
                            <Link to="/register">
                                <button className="btn btn-light">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar