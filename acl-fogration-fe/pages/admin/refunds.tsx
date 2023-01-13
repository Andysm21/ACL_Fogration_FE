import React, { useEffect, useState } from 'react'
import Layout from '../../components/templates/Layout'
import RefundRequests from '../../components/molecules/RefundRequests';
import axios from 'axios'
import { useRouter } from 'next/router';



const refunds = () => {
  const [person,setPerson]=useState([])
  const [isCorp,setCorp]=useState("")
const [UserID,setUserID]=useState('')
const [Request,setRequest]=useState([])


function refunds(){
  axios.post("http://localhost:8000/refunds",{
  }
 ).then((response) => {
  setRequest(response.data)
  // console.log(Request)
 }).catch((error) => console.log(error))

}

useEffect(() => {
  refunds();
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
            <RefundRequests RefReq={Request}/>
        </div>
      </Layout>
    </div>
  )
}

}
export default refunds;