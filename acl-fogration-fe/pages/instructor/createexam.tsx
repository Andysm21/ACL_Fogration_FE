import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Question from '../../components/molecules/Question'
import Layout from '../../components/templates/Layout'



const createexam = () => {
   const addQuestion = () => {

  }



  return (
    <div>
    <Layout>
    <div className="bg-bc h-100vh p-2 flex flex-col ">
        <h1 className="text-3xl font-bold text-white">Create Exam</h1>
        <div className="bg-black3 rounded-md flex flex-col text-white items-start p-2">
        {/* <div className = "mx-5 hover:cursor-pointer hover:border-bc bg-black3  text-white p-1 my-2 text-l  border-2 w-72  border-white rounded-md flex justify-center hover:text-bc" 
          onClick={addCourse} >
          <BsPlusCircle size={30}/> */}
          {/* </div>  */}
           <Question/>
             
        <button className="m-1 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-80" >
        Submit Exam</button>
        </div>
    
    </div>
    </Layout>
    </div>
  )
}

export default createexam