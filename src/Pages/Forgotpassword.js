import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from './../history';
import '../css/ForgotPassword.css';
import Axios from "axios";
import Logo from "../EzeeCanteenLogo.jpeg";
import validator from 'validator'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            psw1: ''   
        };
    }
    
    state = {
        isPasswordShown: false
      };
      state = {
        emailError1:''
    };
    validatepassword = (e) => {
        this.state.psw1 = e.target.value
        if (validator.isStrongPassword(this.state.psw1, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            this.setState({ emailError1: 'Strong Password' })
            this.setState({ password: this.state.psw1 })
        } else {
            this.setState({ emailError1: 'Password should contain minimum 8 letters with atlest 1 uppercse,1 lowercase,1 special character and 1 number' })
            this.setState({ password: '' })
        }
    }
    
      togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
      };

    forgotpassword = (props) => {
        
        this.setState({ email: this.state.email });
        this.setState({password: this.state.password});
        Axios.post('http://localhost:3001/api/forgot',
        {
            email: this.state.email,
            password: this.state.password    
        }).then(response => {
            if (response.data.message) {
                alert(response.data.message);
            }
            
        }).catch(error => console.log(error));

    }
    
    
    
    render() {
        const { isPasswordShown } = this.state;
        return (
            <div className="ForgotPasswordContainer">
                <div>
                    <img src={Logo} className="Logo" />
                </div>
                <div className="VerticalLine"></div>
                    <div className="Container"> 
                    <form>
                        <h3>Reset Password</h3>
                
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onInput={(e) => this.setState({ email: e.target.value })}pattern="[a-z@.]{10-100}" required/>
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>New Password</label>
                            <input  type={isPasswordShown ? "text" : "password"} className="form-control" onChange={(e) => this.validatepassword(e)} placeholder="Enter password"  required/>
                            <span className="text-danger">{this.state.emailError1}</span><br />
                            <input type="checkbox" onClick={this.togglePasswordVisiblity} /> Show Password
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>OTP</label>
                            <input type="otp" className="form-control" placeholder="Enter OTP" />
                        </div>
                        <br></br>
                        <Link to='/' >
                        <button type="submit" className="btn btn-primary btn-block" id="SignUpButton" onClick={this.forgotpassword}>Set Password</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default ForgotPassword;