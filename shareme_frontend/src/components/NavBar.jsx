import React from 'react';
import {useNavigate,Link} from "react-router-dom"
import {IoMdAdd,IoMdSearch} from "react-icons/io"

const NavBar = ({searchTerm,setSearchTerm,user}) => {
  const navigate=useNavigate();

  if(!user) return null;
  return (
    <div className="w-full flex gap-2 md:gap-5 mt-5 pb-7">
       <div className='flex w-full justify-start items-center bg-white rounded-lg outline-none border-none focus-within:shadow:sm'>
          <IoMdSearch fontSize={21} className="ml-1"/>
          <input
          type="text"
          onChange={(e)=>setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search..."
          onFocus={()=>navigate("/search")}
          className="p-2 w-full bg-white outline-none"
          />
       </div>
       <div className='flex gap-3'>
        <Link to={`user-profile/${user._id}`} className="hidden md:block">
          <img src={user.image} alt="userProfile" className="w-14 h-12 rounded-lg"/>
        </Link>
        <Link to="/createPin" className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
        <IoMdAdd/>
        </Link>
       </div>
    </div>
  )
}

export default NavBar;
