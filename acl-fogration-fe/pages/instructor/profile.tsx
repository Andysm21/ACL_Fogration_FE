import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import InstructorProfile from '../../components/molecules/InstructorProfile';
import IndividualUserProfile from '../../components/molecules/IndividualUserProfile';
import CorporateUserProfile from '../../components/molecules/TraineeProfile';

import axios from 'axios';
import { useUnmountEffect } from 'framer-motion';




import TraineeProfile from '../../components/molecules/TraineeProfile';


const profile = () => {
  
const [instructor,setPerson]=useState([])
function getInstProf(){
  axios.post("http://localhost:8000/instructorProfile",{
    Instructor_ID:Number(localStorage.getItem("user_id"))
  }
 ).then((response) => {
   setPerson(response.data)
 }).catch((error) => console.log(error))
}


useEffect(()=>{
  getInstProf();
})

  return (
    <div>
        <Layout>
        <div>
            <InstructorProfile instructor={instructor}/>

            {/* <IndividualUserProfile user={person}/> */}
            {/* <CorporateUserProfile user={person}/> */}
            {/* <TraineeProfile user={person}/> */}

        </div>
      </Layout>
    </div>
  )
}

export default profile