import Head from 'next/head'
import React from 'react'
import NavGuestLogin from '../components/atoms/NavGuestLogin'
import Layout from '../components/templates/Layout'
import { IoConstructSharp } from 'react-icons/io5'
const construction = () => {
  return (
<div>
    <NavGuestLogin />
    <div className="bg-bc h-screen justify-center w-full flex-col flex">
         <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon 1.ico" type="image/x-icon" />
      </Head>
        
        <div className="text-bc">............dniphjfow fjow jfoucfheufhiwefbcuewfgeiofh;qwifhieorqf</div>
       <p className="text-white text-4xl text-center">Under construction </p>
        <div className="flex justify-center items-center flex-col text-center">
        <IoConstructSharp className="text-white" size={100}/>
        </div>
    </div>
  </div>)
}

export default construction