import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png"
import jwt_decode from "jwt-decode";
import { client } from '../client';


const Login = () => {
  const navigate=useNavigate();
  
  const handleResponseCallback=(response)=>{
    const userObject=jwt_decode(response.credential);
    localStorage.setItem("user",JSON.stringify(userObject));
    const {picture,name,sub}=userObject;

    const doc={
      _id:sub,
      _type:"user",
      userName:name,
      image:picture
    }

    client.createIfNotExists(doc).then(()=>{
        navigate("/",{replace:true})
    })
}

useEffect(()=>{
    /* global google */

    

    google.accounts.id.initialize({
      client_id:"902889662674-php8h7r8ajgrebq3cifo5k2uob418nnk.apps.googleusercontent.com",
      callback:handleResponseCallback
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    )

    google.accounts.id.prompt();

},[])

return (
  <div className="flex justify-start h-screen items-center flex-col">
    <div className='relative h-full w-full'>
      <video
      src={shareVideo}
      loops="true"
      autoPlay
      controls={false}
      muted
      className="h-full w-full object-cover"
      >

      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-blackOverlay flex flex-col justify-center items-center">
        <div className='p-5'>
          <img src={logo} width="130px" alt="logo"/>
        </div>
        <div className='shadow-2xl'>

          <div className="flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none" id="signInDiv"></div>

          
          
        </div>
      </div>

      </div>
    </div>
 
)
}

  


export default Login;
