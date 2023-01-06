import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Question from '../../components/molecules/Question'
import Layout from '../../components/templates/Layout'
import axios from 'axios';


const createexam = () => {

  
    

  return (
    <div>
      <Layout>
        <div className="bg-bc h-100vh p-2 flex flex-col ">
          <h1 className="text-3xl font-bold text-white">Create Exam</h1>
          <div className="bg-black3 rounded-md flex flex-col text-white items-center justify-center p-2">
            <Question />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default createexam