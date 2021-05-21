import React from 'react';
import { Route ,Redirect } from "react-router-dom"
import {useAuth} from "./SignInMethod/Authprovider";
function Private({component:Component , ...rest}) {
    const { User }=useAuth();
    return (
        <Route
        {...rest}
        render={props =>{
            return User ? <Component {...props} /> : <Redirect to="/home" /> }
        }>
            
        </Route>
    );
}

export default Private;