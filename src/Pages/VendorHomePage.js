import React from 'react';
import '../css/VendorHomePage.css';
import VendorHeader from './VendorHeader';
import { Link } from 'react-router-dom';
function VendorHomePage(){
    return(
        <div>
            <VendorHeader />
            <div className="home">
                <div><button className="menu">Update Menu</button></div>
                <div>
                    <Link to="/OrderDash">
                        <button className="order">Order Dashboard</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default VendorHomePage