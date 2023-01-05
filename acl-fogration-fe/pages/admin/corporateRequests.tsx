import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import CorporateRequests from '../../components/molecules/CorporateRequests';
import axios from 'axios'



const corporateRequests = () => {
  const [person,setPerson]=useState([])
  const [isCorp,setCorp]=useState("")
const [UserID,setUserID]=useState('')


function getProfile(){
  if(isCorp=="true"){
  axios.post("http://localhost:8000/corporateProfile",{
    User_ID:Number(localStorage.getItem("user_id"))
  }
 ).then((response) => {
   setPerson(response.data)
  //  console.log(response.data)
 }).catch((error) => console.log(error))
}
else if(isCorp=="false"){
  axios.post("http://localhost:8000/individualProfile",{
    User_ID:Number(localStorage.getItem("user_id"))
  }
 ).then((response) => {
   setPerson(response.data)
 }).catch((error) => console.log(error))
}
}
useEffect(() => {
  setCorp(localStorage.getItem("isCorp"))
  setUserID(localStorage.getItem("userID"))
  getProfile();

})
useEffect(()=>{
})
  return (
    <div>
        <Layout>
        <div>
            <CorporateRequests courses={undefined}/>
        </div>
      </Layout>
    </div>
  )
}

export default corporateRequests;