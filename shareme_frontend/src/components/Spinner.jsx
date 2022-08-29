import React from 'react'
import {Circles} from "react-loader-spinner"

const Spinner = ({message}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
        <Circles color='#00bfff' width={300} height={100}/>
        <p className="text-lg text-center px-2 my-5">{message}</p>
    </div>
  )
}

export default Spinner;
