import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBasketShopping } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className='row' style={{height: '65px'}}>
                    <div className='col-6 align-self-center'>
                        <h3 className='ml-5 sefruit-main-dark'>
                            Sefruit
                        </h3>    
                    </div>
                    <div className='col-2 sefruit-bg-main-light'>
                        <div className='row justify-content-center align-items-center h-100'>
                            <FontAwesomeIcon icon={faBars} className='sefruit-font-size-20 sefruit-main-dark' />
                        </div>    
                    </div>
                    <div className='col-2 sefruit-bg-dark-grey'>
                        <div className='row justify-content-center align-items-center h-100'>
                            <FontAwesomeIcon icon={faBasketShopping} className='sefruit-font-size-20 sefruit-main-dark' />
                        </div>
                    </div>
                    <div className='col-2 sefruit-bg-light-grey'>
                        <div className='row justify-content-center align-items-center h-100 sefruit-main-dark'>
                            <h6>
                                Indonesia
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar