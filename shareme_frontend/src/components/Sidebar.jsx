import React from 'react'
import {Link,NavLink} from "react-router-dom"
import {RiHomeFill} from "react-icons/ri";
import {IoIosArrowForward} from "react-icons/io";
import logo from "../assets/logo.png";



const isActivetyle='flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize'

const isNotActiveStyle='flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'

const categories=[
  {name:"animals"},
  {name:"Wallpapers"},
  {name:"Photography"},
  {name:"Gaming"},
  {name:"Coding"}
]

const Sidebar = ({user,closeToggle}) => {
  const handleCloseSideBar=()=>{
    if(closeToggle) closeToggle(false);
  }
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
        <div className="flex flex-col">
          <Link to="/" className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'>
            <img src={logo} alt="logo" className="w-full" onClick={()=>handleCloseSideBar()}/>
          </Link>
          <div className='flex flex-col gap-5'>
          <NavLink onClick={handleCloseSideBar} to="/" className={({isActive})=>isActive? isActivetyle : isNotActiveStyle}>
                <RiHomeFill/> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover Categories</h3>
            {categories.slice(0,categories.length-1).map(category=>(
              <NavLink key={category.name} to={`/category/${category.name}`}  onClick={handleCloseSideBar} className={({isActive})=>isActive?isActivetyle:isNotActiveStyle}

              >
                {category.name}
              </NavLink>
            ))}
          </div>

        </div>
        {user && <Link onClick={handleCloseSideBar} to={`user-profile/${user._id}`} className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3">
              <img src={user.image} className="w-10 h-10 rounded-full" alt="userProfile"/>
              <p>{user.userName}</p>
        </Link>}
    </div>
  )
}

export default Sidebar;
