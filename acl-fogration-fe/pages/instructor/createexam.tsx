import React, { useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Question from '../../components/molecules/Question'
import Layout from '../../components/templates/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';


const createexam = () => {

  
    
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
        <div className="bg-bc h-screen p-2 flex flex-col ">
          <h1 className="text-3xl font-bold text-white">Create Exam</h1>
          <div className="bg-black3 rounded-md flex flex-col text-white items-center justify-center p-2">
            <Question />
          </div>
        </div>
      </Layout>
    </div>
  );
}
}
export default createexam