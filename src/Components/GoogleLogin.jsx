import React,{ useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

export const GoogleLogin = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) =>{   
    var userObject = jwt_decode(response.credential);  
    setUser(userObject);  
    document.getElementById("loginDiv").hidden = true;
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "350405664185-d56iu54gr5qvkoufv90479mtd8jo5a3j.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    
    google.accounts.id.renderButton(
      document.getElementById("loginDiv"),
      {theme: "outline", size: "medium"}
    )
    google.accounts.id.prompt();
  },[])

  const handleSignOut = (e) => {
    console.log(e);
    setUser({});
    document.getElementById("loginDiv").hidden = false;
  }



  return (
    <div className="App">
    <div id='loginDiv'></div>
    {Object.keys(user).length !==0 &&
      <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>      
    }

    {
      Object.keys(user).length !==0 && <div>
         <img src={user.picture} alt="userImgae"/>
         <p>{user.name}</p>
         <p> {user.email} </p>
       </div>
    }
  </div>
  )
};


