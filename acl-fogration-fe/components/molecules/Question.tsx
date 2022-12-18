import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'

const Question = () => {
  const addCourse = () => {
  }

  return (
    <div className="bg-bc p-2 m-2 rounded-lg">
        <div className="text-l mx-2"> Question ID </div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md" 
         /> 
            <div className="m-2 text-l">Question </div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         />   
          <div className="mx-2 text-l">Coiche 1</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         /> 
         <div className="mx-2 text-l">Coiche 2</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         /> 
         <div className="mx-2 text-l">Coiche 3</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         /> 
         <div className="mx-2 text-l">Coiche 4</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         /> 

        </div>

  )
}

export default Question