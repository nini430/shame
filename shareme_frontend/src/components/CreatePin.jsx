import React,{useState} from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai";
import {MdDelete} from  "react-icons/md";
import {useNavigate} from "react-router-dom"
import {client} from "../client"
import Spinner from "./Spinner"
import { categories } from '../utils/data';


const CreatePin = () => {
  const [title,setTitle]=useState("");
  const [about,setAbout]=useState("");
  const [destination,setDestination]=useState("");
  const [loading,setLoading]=useState(false);
  const [fields,setFields]=useState();
  const [category,setCategory]=useState(null)
  const [imageAsset,setImageAsset]=useState(null)
  const [wrongImageType,setWrongImageType]=useState(false)

  const navigate=useNavigate();

  

  return (
   <div className="flex flex-col justify-center items-center">
        {fields && (
          <p className="text-red-500 text-xl mb-5 transition-all duration-150 ease-in">Please fill in all the fields</p>
        )}
        <div className="flex flex-col lg:flex-row bg-white p-3 flex-0.7 lg:p-5 justify-center items-center w-full lg:w-4/5">
            <div className="bg-secondaryColor flex flex-col justify-center items-center border-2 border-gray-300 border-dotted h-420 w-full">
              {loading && <Spinner/>}
              {wrongImageType && <p>Wrong Image type!</p>}
              {!imageAsset ? (
                <label>
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className='flex flex-col items-center justify-center'>
                      <p className="font-bold text-2xl">
                        <AiOutlineCloudUpload/>

                      </p>
                      <p className="text-lg">Click to Upload</p>
                    </div>
                    <p className="mt-32 text-gray-400">use high quality JPG,SVG,PNG less than 20 MB</p>
                  </div>
                  <input type="file" name="upload-image" onChange={uploadImage} className="w-0 h-0"/>
                </label>
              ):(
                <p>something else</p>
              )}
            </div>
        </div>
   </div>
  )
}

export default CreatePin
