import React, { Component } from "react";
import Header from './Header';
import '../css/completepayment.css';
import { Link } from 'react-router-dom';



function CompletePayment(props) {
  
  var data=props.location.state.data;
  var fullName=props.location.state.data.fullName;
  var email=props.location.state.data.email;
  return (
    <div>
    <Header className="headercomplete" loginDetails={fullName} loginEmail={email}/>
    <div className="completepayment">
  
      <p className="completed">
        Payment Completed!
      </p>  
      <p className="message">
        Your Order is on the way
        <br></br>
        You will be notified once it is ready
        <br></br>
      </p> 
      <Link to={{
                    pathname:"/BrowseFood",
                    state: {
                      email: props.location.state.data.email,
                      fullName: props.location.state.data.fullName
                    }
        }}> 
        <button className="continuebrowsing">Continue</button>
        </Link>
    </div>
    </div>
  );
}

export default CompletePayment;