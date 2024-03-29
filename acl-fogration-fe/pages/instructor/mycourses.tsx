import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import HeaderInstructorMyCourses from "../../components/organisms/HeaderInstructorMyCourses";
import InstructorCoursesCard from "../../components/molecules/InstructorCoursesCard";
import InstructorMyCoursesCard from "../../components/molecules/InstructorMyCoursesCard";
import axios from 'axios'
import Fiter from "../../components/molecules/Filter";
import { useRouter } from "next/router";

// interface Props {
//   data: {
//     song: string;
//     artist: string;
//     year: string;
//   }[];
// }

const mycourses: NextPage = () => {

  var [courseArray,setCourseArray]=useState([]);
  function getCourses(){
     axios.post("http://localhost:8000/viewMyCoursesInstructor",{
      Instructor_ID: Number(localStorage.getItem("user_id"))
     }
    ).then((response) => {
      console.log(Number(localStorage.getItem("user_id")))

      setCourseArray(response.data)
    }).catch((error) => console.log(error))
  }

  function getCoursesFilterPrice(){
    axios.post("http://localhost:8000/filterPriceInst",{
     Instructor_ID: Number(localStorage.getItem("user_id")),
     FilterPrice1: Number(localStorage.getItem("MinPrice")),
     FilterPrice2:Number(localStorage.getItem("MaxPrice"))
    }
   ).then((response) => {
     setCourseArray(response.data)
   }).catch((error) => console.log(error))
 }

 function getCoursesFilterSubject(){
  axios.post("http://localhost:8000/filterSubjectInst",{
   Instructor_ID: Number(localStorage.getItem("user_id")),
   FilterSubject: localStorage.getItem("Subject"),
  }
 ).then((response) => {
   //console.log(Number(localStorage.getItem("InstID")))
   //console.log(Number(localStorage.getItem("Subject")))
   //console.log(localStorage.getItem("H1"))
   setCourseArray(response.data)
 }).catch((error) => console.log(error))
}

function getCoursesFilterSubjectandPrice(){
  axios.post("http://localhost:8000/filterPriceAndSubjectInst",{
   Instructor_ID: Number(localStorage.getItem("user_id")),
   FilterPrice1: Number(localStorage.getItem("MinPrice")),
   FilterPrice2:Number(localStorage.getItem("MaxPrice")),
   FilterSubject: localStorage.getItem("Subject")
  }
 ).then((response) => {
   setCourseArray(response.data)
 }).catch((error) => console.log(error))
}

function getCoursesSearch(){
  axios.post("http://localhost:8000/searchmycourses",{
   id: Number(localStorage.getItem("user_id")),
   searchR: localStorage.getItem("Search")
  }
 ).then((response) => {
  // console.log("Function:")
  // console.log(localStorage.getItem("Search"))
  // console.log("response data:")
   if(response.data == "")
    setCourseArray([])
   else{
    setCourseArray(response.data)
    console.log(response.data)
   }
    

 }).catch((error) => console.log(error))
}

useEffect(()=>{
 // console.log("useEffect:")
 // console.log(localStorage.getItem("Search"))
  if(localStorage.getItem("Subject")==""){
      if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){
         if(localStorage.getItem("Search")=='' || localStorage.getItem("Search")==""){
          getCourses()
         }
         else{
         // console.log("useEffect:")
         // console.log(localStorage.getItem("Search"))
          getCoursesSearch();
         } 
      }
      else{
        getCoursesFilterPrice()
      }
  }
  else if(localStorage.getItem("MaxPrice")== "" && localStorage.getItem("MinPrice")==""){
      getCoursesFilterSubject()
  }
  else{
    getCoursesFilterSubjectandPrice()
  }

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
    <div className="bg-bc h-screen">
      <Head>
        <title>My Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon 1.ico" />
      </Head>

      <Layout>
        <div>
          <HeaderInstructorMyCourses/>

          <InstructorMyCoursesCard courses={courseArray}/>
        </div>
      </Layout>
    </div>
  );
};
}
export default mycourses;
