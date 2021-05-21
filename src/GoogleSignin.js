import React from 'react';
import {useAuth} from "./SignInMethod/Authprovider";
import { useHistory } from "react-router-dom";
import "./index.css";
function GoogleSignin(props) {
    const { Login } =useAuth();
     const history =useHistory();
    const submitter=async(e)=>{
        e.preventDefault();
        try{
             await Login();
             history.push("/home")
        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <div className="button">
            <form >
            <input type="button" onClick={submitter} value="sign in with google" />
            </form>
            
        </div>
    );
}

export default GoogleSignin;