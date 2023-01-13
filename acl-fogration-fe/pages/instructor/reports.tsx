import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import TraineeReports from '../../components/molecules/TraineeReports';
import axios from 'axios'
import { useRouter } from 'next/router';



const reports = () => {
  const [person,setPerson]=useState([])
  const [isCorp,setCorp]=useState("")
const [UserID,setUserID]=useState('')


function getProblem(){
  
  axios.post("http://localhost:8000/viewMyProblems",{
    ID:Number(localStorage.getItem("user_id")), User_Type: localStorage.getItem("Type")
  }
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
const router = useRouter();
 var authBool=false;
 function Auth(){
   localStorage.clear();
   localStorage.setItem("Login","false");
   localStorage.setItem("Type","");
   router.push("/guest/login");

 }
 const[Type,setType] = useState("Instructor");
 useEffect(()=>{
  if(authBool==true){
    Auth();
  }
  else{
    setType(localStorage.getItem("Type"));}});
  if(Type!="Instructor"){
    authBool=true;
   }
 else{
 
  return (
    <div>
        <Layout>
        <div>
            <TraineeReports problems={person} />
        </div>
      </Layout>
    </div>
  )
}
}
export default reports;