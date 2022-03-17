import React from 'react';
import EmailValidator from './../Supports/Functions/EmailValidator';
import PhoneValidator from './../Supports/Functions/PhoneValidator';
class Register extends React.Component {

    state = {
        error: null,
        phoneNumber: null,
        email: null
    }

    // r
    onValidation = () => {
        let inputEmailOrPhone = this.refs.inputEmailOrPhone.value // r -> ryan.fandy@gmail.com

        if (inputEmailOrPhone) {
            if (!inputEmailOrPhone.includes('@')) { // Apabila Index Ke-0 Aalah Number
                // Validasi Phone Number
                let resultPhoneValidator = PhoneValidator(inputEmailOrPhone)

                if (resultPhoneValidator === true) {
                    this.setState({ phoneNumber: inputEmailOrPhone, error: null })
                } else {
                    this.setState({ error: resultPhoneValidator })
                }
            } else {
                // Validasi Email
                let resultEmailValidator = EmailValidator(inputEmailOrPhone) // r -> ryan.fandy@gmail.com

                if (resultEmailValidator === true) {
                    this.setState({ email: inputEmailOrPhone, error: null })
                } else {
                    this.setState({ error: 'Email Tidak Sesuai!' })
                }
            }
        } else {
            this.setState({ error: 'Isi Semua Data' })
        }
    }

    handleRegister = () => {
        console.log(this.props.inputUsername)
        console.log(this.props.inputEmail)
        console.log(this.props.inPassword)
        console.log(this.props.inConfPassword)

    }

    render() {
        return (
            <div className="container">
                <div className='row align-items-center mx-5 my-5 border border-grey' style={{ height: '68vh' }}>
                    <div className="col-6">
                        <img
                            src='https://image.winudf.com/v2/image/Y29tLmVsZW5zd2VldG1vb2QxMi5mcnVpdHNuY2hvY29sYXRlX3NjcmVlbl8xXzE1Mzc4NzU1NDJfMDU1/screen-1.jpg?fakeurl=1&type=.webp'
                            alt='portal'
                            width="80%" />
                    </div>
                    <div className='col-6'>
                        <div className='mt-3'>
                            <h2>
                                Register
                            </h2>
                        </div>
                        <div className='mt-3'>
                            <input type="text" ref='inputUsername' placeholder="Enter Username" className="form-control" />
                        </div>
                        <div className='mt-3'>
                            <input type="text" ref='inputEmail' placeholder="Enter Your Email or Phone Number" className="form-control" onChange={this.onValidation} />
                        </div>
                        <div className='mt-3'>
                            <div className='input-group'>
                                <input type="password" ref="inPassword" placeholder="Enter Your Password" className="form-control" />
                                <span className='input-group-text'>Show</span>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='input-group'>
                                <input type="password" ref="inConfPassword" placeholder="Enter Confirmation Password" className="form-control" />
                                <span className='input-group-text'>Show</span>
                            </div>
                        </div>
                        <div className='mt-3'>
                            {/* <input type="button" value="Register" className='btn sefruit-bg-secondary-light sefruit-main-light mb-3' /> */}
                            <button className='btn btn-light'>Register</button>
                        </div>
                        <div>
                            <h6 className='sefruit-danger'>
                                {this.state.error}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register