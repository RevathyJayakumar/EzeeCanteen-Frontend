import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../Pages/Login';
import BrowseFood from '../Pages/BrowseFood';
import Signup from '../Pages/Signup';
import Header from '../Pages/Header';
import CompletePayment from "../Pages/completepayment";
import Payment from "../Pages/Payment";
import OrderDash from "../Pages/OrderDash";
import VendorHomePage from "../Pages/VendorHomePage";
import ForgotPassword from "../Pages/Forgotpassword";


const WebNavigator = (props) => {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path='/Header' exact component={Header} />
                    <Route path="/BrowseFood" exact component={BrowseFood} />
                    <Route path="/Signup" exact component={Signup} />
                    <Route path="/CompletePayment" exact component={CompletePayment} />
                    <Route path="/Payment" exact component={Payment} />
                    <Route path="/OrderDash" exact component={OrderDash} />
                    <Route path="/VendorHomePage" exact component={VendorHomePage} />
                    <Route path="/ForgotPassword" exact component={ForgotPassword} />
                </Switch>
            </Router>
        </div>
    );
};
export default WebNavigator;