import firebase from "firebase/app";
import "firebase/auth"


firebase.initializeApp({
    apiKey: "AIzaSyBRXU_CxKhYCDwdN5UlQDWBkEDa9vggM8E",
    authDomain: "lewek-b57c3.firebaseapp.com",
    databaseURL: "https://lewek-b57c3-default-rtdb.firebaseio.com",
    projectId: "lewek-b57c3",
    storageBucket: "lewek-b57c3.appspot.com",
    messagingSenderId: "661612329725",
    appId: "1:661612329725:web:b4205de10ded3ad3d2dc94"
})

 
export const Login =(e)=>{
    var provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
  .signInWithPopup(provider).then(result =>{
      const res=result
  }).catch(err => console.log(err))
      
  
}

export const logout=()=>{
    return firebase.auth().signOut();
}


export default firebase;