import React, { useContext ,useEffect ,useState} from 'react';
import { Login ,logout} from "./Firebase";
import firebase from "./Firebase";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


function Authprovider({children}) {
    const [User,setCurrentUser]=useState();
    const [dark,setDark]=useState(true);
    const [active,setActive] =useState(true)

       useEffect(()=>{
              const subscribe = firebase.auth().onAuthStateChanged(user =>{
                  setCurrentUser(user);
                  setActive(false);
              })

              return subscribe;

       },[])
   
      const darkFunction=()=>{
          setDark(!dark);
      }

    const value={
        Login,
        logout,
        User,
        dark,
        darkFunction
    }

    return (
        <AuthContext.Provider value={value} >
            {!active && children}
        </AuthContext.Provider>
    );
}

export default Authprovider;