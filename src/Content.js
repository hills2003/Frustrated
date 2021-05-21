import React,{useEffect,useState} from 'react';
import "./index.css";
import henry from "./assets/henry.jpg";
import {useAuth} from "./SignInMethod/Authprovider";
import {Switch} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';



function Content(props) {
    const { logout ,User ,darkFunction ,dark } =useAuth();
    const [value,setValue]=useState();
    const [first,setFirst]=useState();
    const [second,setSecond]=useState();
    const [third,setThird]=useState();
    const [forth,setForth]=useState();
    const [img,setImg]=useState();
    const submitplace=(e)=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e3c708905690dc8e8dbb1ec36049bbb3`)
        .then(response => response.json())
        .then(res =>{
            
          setFirst(res.main.temp_min);
          setSecond(res.main.temp_max);
          setThird(res.weather[0].description);
          setForth(res.name);  
         
        } )

    }
    useEffect(()=>{
        setImg(User.photoURL)
    },[])

    //console.log(JSON.stringify(User && User.photoURL))
    
    //console.log()
    useEffect(()=>{
 
        function success(position){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e3c708905690dc8e8dbb1ec36049bbb3`)
            .then(response => response.json())
            .then(res =>{
             setName(res.name);
             setCountry(res.sys.country);
             setWeather(res.weather[0].description);
             setTemp(res.main.temp_min);
            } )
          //  setImg(JSON.stringify(User.photoURL))
        }
        function error(position){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=e3c708905690dc8e8dbb1ec36049bbb3`)
            .then(response => response.json())
            .then(res =>{
             setName(res.name);
             setWeather(res.weather[0].description)
            } )
        }
        navigator.geolocation.getCurrentPosition(success,error,{enableHighAccuracy:true})
       
    },[])
    const [weather,setWeather]=useState();
    const [name,setName]=useState();
    const [country,setCountry]=useState();
    const [temp,setTemp]=useState();
    return (
        <div className="mini-card">
            <div className={ dark ? "left-pane" :"left-pane2"}>
             <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABQElEQVRIS+2U4TFDQRRGTypAB1SACuiAEqgAFZAOogJUgApEBzpAB1TAnLib2bzsvn1j5v3L/kky7+Y79/vufTth5DMZWZ8NoJnwkIi2gQvgGDgA/P0GPAG3wFcfpQVQ8CVESzqKnwesyOkD2PFjiL8CM2AeHfvsBjgKVSH3JUIfwBj2gQfgrBKDkOuA7pXiKgHszj/5+QnsNiapK51Mw9VKeRdgp3dZRdV6VmMjzknHh91mckAqtOYqMu3dkEzsJ747BzdL2OLkANfupGa1EVMCWGZTOvnoAnywBey0drsCc1Y6cB7LxcgdpC7+C5Ar5D0aVGclot5taN4JfwUJsNy+3MFpvFgWut/aXOQ48CjuBrosz4B6a9d1enEGahbLvuPOWhtyqu5eA0NhxuJ6XubOW5fdUPFq3QbQjHD0iH4BuN09Ge9SplMAAAAASUVORK5CYII="/>
                <h3>METEOROLOG</h3>
            </div>

            <div className="list">
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <Switch onChange={()=>darkFunction()} /> {dark ? "dark" : "light"}
                    </ul>
                </nav>
            </div>
            <div clasName="current-weather">
                       <div className="card">
                            <h4>{name},{country}</h4>
                            <p className="mild">{weather}</p>
                            <p className="celsius">{Math.round(temp - 273.15) +" " + "c"}</p>
                            </div>
            </div>
            </div>
            <div className="right-pane">
                <div clasName="top">
                    <form onSubmit={submitplace}>  
                         <input className="input"  value={value} onChange={(e)=>setValue(e.target.value)} data-inputRef type="search" placeholder="search" />
                    </form>              
                    
                    <img onClick={()=>logout()} title="Log out" className="img" src={img} alt='user profile' />
                    <p className="p"> <MenuIcon /> </p>
                </div>
               { value ? <div className="country">
                     <p> min_temp : {Math.round(first - 273.15) + " " + "c"}</p>
                     <p>max_temp : {Math.round(second - 273.15) + " " + "c"}</p>
                     <p>{third}</p>
                     <p>{forth}</p>
               </div> : ""}
            </div>
            
        </div>
    );
}

export default Content;