import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import CorporateRequests from '../../components/molecules/CorporateRequests';
import axios from 'axios'
import { Requests } from "../../interfaces";



const corporateRequests = () => {
  const [Request,setRequest]=useState([])
  const [isCorp,setCorp]=useState("")
const [UserID,setUserID]=useState('')


function getProfile(){
  axios.post("http://localhost:8000/courseRequests",{
  }
 ).then((response) => {
  setRequest(response.data)
 }).catch((error) => console.log(error))

}
useEffect(() => {
  setCorp(localStorage.getItem("isCorp"))
  setUserID(localStorage.getItem("userID"))
  getProfile();
  console.log("hi")
  console.log(Request)

})
useEffect(()=>{
})
  return (
    <div>
        <Layout>
        <div>
            <CorporateRequests Requests={Request}/>
        </div>
      </Layout>
    </div>
  )
}

export default corporateRequests;