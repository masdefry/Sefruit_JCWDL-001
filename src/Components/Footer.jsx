import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-6'>
                        <span>Menu 1</span>
                        <span className='ml-3'>Menu 2</span>
                    </div>
                    <div className='col-1'>
                        <div className='row justify-content-center align-items-center sefruit-bg-dark-grey'>
                            <FontAwesomeIcon icon={faArrowUp} className='sefruit-font-size-20' />
                        </div>
                    </div>
                    <div className='col-5 text-right'>
                        <span>
                            Menu 1
                        </span>   
                        <span>
                            Menu 2
                        </span> 
                        <span>
                            Menu 3
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer