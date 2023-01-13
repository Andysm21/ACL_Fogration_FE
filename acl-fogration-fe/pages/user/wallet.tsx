import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import TraineeWallet from '../../components/molecules/TraineeWallet';
import axios from 'axios'
import { useRouter } from 'next/router';



const wallet = () => {
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
const router = useRouter();

var authBool=false;
function Auth(){
 localStorage.clear();
 localStorage.setItem("Login","false");
 localStorage.setItem("Type","");
 router.push("/guest/login");

}
const[Type,setType] = useState("User");
useEffect(()=>{
if(authBool==true){
  Auth();
}
else{
  setType(localStorage.getItem("Type"));}});
if(Type!="User" && Type!="Corp"){
  authBool=true;
 }
else{

  return (
    <div>
        <Layout>
        <div>
            <TraineeWallet user={person} />
        </div>
      </Layout>
    </div>
  )
}
}
export default wallet;