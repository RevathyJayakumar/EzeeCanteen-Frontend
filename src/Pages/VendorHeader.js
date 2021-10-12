import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/VendorHeader.css';
import Logo from "../EzeeCanteenLogo.jpeg"

class VendorHeader extends React.Component{
   
    render(){
        return(
            <div>
                <div className="header2">
                    <div className="header2__first">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="header2__second">
                    <a href="/">Logout</a>
                    &nbsp;&nbsp;&nbsp;
                        <AccountCircleIcon fontSize="large"/>
                        <span className="header2__secondOne">Hello</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default VendorHeader