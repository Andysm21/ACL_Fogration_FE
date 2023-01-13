import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import CorporateRequests from '../../components/molecules/CorporateRequests';
import axios from 'axios'
import { Requests } from "../../interfaces";
import { useRouter } from 'next/router';



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
const router = useRouter();
var authBool=false;
function Auth(){
  localStorage.clear();
  localStorage.setItem("Login","false");
  localStorage.setItem("Type","");
  router.push("/guest/login");

}
const[Type,setType] = useState("Admin");
useEffect(()=>{
 if(authBool==true){
   Auth();
 }
 else{
   setType(localStorage.getItem("Type"));}});
 if(Type!="Admin"){
   authBool=true;
  }
else{

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
}
export default corporateRequests;