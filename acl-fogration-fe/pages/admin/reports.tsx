import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import ReportRequests from '../../components/molecules/ReportRequests';
import axios from 'axios'



const reports = () => {
  const [person,setPerson]=useState([])
  const [isCorp,setCorp]=useState("")
const [UserID,setUserID]=useState('')


function getProblem(){
  
  axios.get("http://localhost:8000/viewReportedProblems"
 ).then((response) => {
   setPerson(response.data)
   console.log(response.data)
 }).catch((error) => console.log(error))
}
useEffect(() => {
  setCorp(localStorage.getItem("isCorp"))
  setUserID(localStorage.getItem("userID"))
  getProblem();

})
useEffect(()=>{
})
  return (
    <div>
        <Layout>
        <div>
            <ReportRequests problems={person}/>
        </div>
      </Layout>
    </div>
  )
}

export default reports;