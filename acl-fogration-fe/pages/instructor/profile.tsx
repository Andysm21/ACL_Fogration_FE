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
    Instructor_ID:2
  }
 ).then((response) => {
   setPerson(response.data)
   console.log(response.data)
 }).catch((error) => console.log(error))
}

function changePassword(){
  axios.post("http://localhost:8000/changePassword",{
    x:2,
    pass: localStorage.getItem("NewPassword"),
    type:localStorage.getItem("type")
  }
 ).then((response) => {
   setPerson(response.data)
   console.log(response.data)
 }).catch((error) => console.log(error))
}
useEffect(()=>{
  getInstProf();
  console.log(instructor)
})

  return (
    <div>
        <Layout>
        <div>
            <InstructorProfile instructor={instructor} />

            {/* <IndividualUserProfile user={person}/> */}
            {/* <CorporateUserProfile user={person}/> */}
            {/* <TraineeProfile user={person}/> */}

        </div>
      </Layout>
    </div>
  )
}

export default profile