import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Question from '../../components/molecules/Question'
import Layout from '../../components/templates/Layout'
let i = 0;
const createexam = () => {
  
   const addCourse = () => {
    i++;
  }
  return (
    <Layout>
    <div className="bg-bc h-screen p-2 flex flex-col ">
        <h1 className="text-3xl font-bold text-white">Create Exam</h1>
        <div className="bg-black3 rounded-md flex flex-col text-white items-start ">
        <div className = "mx-5 hover:cursor-pointer hover:border-bc bg-black3  text-white p-1 my-2 text-l  border-2 w-72  border-white rounded-md flex justify-center hover:text-bc" 
          onClick={addCourse}>
          <BsPlusCircle size={30}/></div> 
          <Question/>
        </div>
    </div>
    </Layout>
  )
}

export default createexam