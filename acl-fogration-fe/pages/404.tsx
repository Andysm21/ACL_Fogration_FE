import Link from 'next/link'
import React from 'react'

const errorPage = () => {

    const goBack = () => {
        window.history.back()
    }

  return (
    <div className="items-center flex flex-col justify-center h-screen w-full bg-bc">
        <div className="flex flex-row justify-center items-center">
        <div className="border-r-2 text-3xl text-white m-2 p-2"> 404</div>
        <h2 className="text-3xl text-white ">Page not found</h2>
        </div>
    
        <button  onClick={goBack} className=" w-44 rounded-lg bg-gradient-to-r to-babyblue from-purple m-2 text-white h-9 hover:text-white">Go back</button>
      
    </div>
  )
}

export default errorPage