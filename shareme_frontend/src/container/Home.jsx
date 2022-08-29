import React, {useState, useEffect, useRef} from 'react';
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {Link, Routes, Route} from 'react-router-dom';
import {Sidebar, UserProfile} from '../components';
import Pins from './Pins';
import {client} from '../client';
import logo from '../assets/logo.png';
import {userQuery} from "../utils/data"
import { fetchUser } from '../utils/fetchUser';


const Home = () => {
  const scrollRef=useRef(null);
  const [user, setUser] = useState(null);
  const [showToggleSideBar, setShowToggleSideBar] = useState(false);
  const userInfo=fetchUser();

  useEffect(()=>{
      const query=userQuery(userInfo?.sub);
      client.fetch(query).then(data=>{
        console.log(data)
        setUser(data[0]);
      })
  },[userInfo?.sub])


  useEffect(()=>{
    scrollRef.current.scrollTo(0,0)
  },[])
  

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
        <div className="hidden md:flex flex-initial h-screen">
          <Sidebar user={user && user}/>
        </div>
        <div className="flex md:hidden flex-row">
          <div className="flex flex-row justify-between p-2 shadow-md items-center w-full">
          <HiMenu fontSize={40} className="cursor-pointer" onClick={()=>setShowToggleSideBar(true)}/>
            <Link to="/">
              <img className="w-28" src={logo} alt="logo"/>
            </Link>
            {user && <Link to={`user-profile/${user?._id}`}>
              <img src={user?.image} alt="user"/>
            </Link>}
          </div>
          {showToggleSideBar && (
          <div className="fixed bg-white overflow-y-auto  h-screen w-4/5 z-10 animate-slide-in shadow-md">
              <div className="absolute flex w-full justify-end items-center p-2">
                <AiFillCloseCircle fontSize={40} className="cursor-pointer" onClick={()=>setShowToggleSideBar(false)}/>
              </div>
              <Sidebar user={user && user} closeToggle={setShowToggleSideBar}/>
          </div>
        )}
            
        </div>

        

        <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
              <Routes>
                <Route path="/user-profile/:userId" element={<UserProfile/>}/>
                <Route path="/*" element={<Pins user={user && user}/>}/>
              </Routes>
        </div>

    </div>
  );
};

export default Home;

