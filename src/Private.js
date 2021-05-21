import React from 'react';
import { Route ,Redirect } from "react-router-dom"
import {useAuth} from "./SignInMethod/Authprovider";
function Private({component:Component , ...rest}) {
    const { User }=useAuth();
    return (
        <Route
        {...rest}
        render={props =>{
            return User ? <Component {...props} /> : <Redirect to="/sign-in" /> }
        }>
            
        </Route>
    );
}

export default Private;