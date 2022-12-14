import React from 'react'
import Masonry from "react-masonry-css"
import Pin from './Pin'




const MasonryLayout = ({pins}) => {
 
  
  return (
    <Masonry className='flex animate-slide-fwd' breakpointCols={{default:4,3000:6,2000:5,1200:3,1000:2,500:1}}>
        {pins?.map(pin=><Pin className="w-max" key={pin._id} pin={pin} />)}
    </Masonry>
  )
}

export default MasonryLayout;
