import React from 'react';
import "./index.css";
import Content from "./Content"
import {useAuth } from "./SignInMethod/Authprovider";

function Weather(props) {


    const { logout ,User ,dark } =useAuth();
    return (
        
        <main className={dark ? "weather" :"weather2"}>
            <Content />
        </main>

    );
}

export default Weather;