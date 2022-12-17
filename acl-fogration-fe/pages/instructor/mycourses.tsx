import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import HeaderInstructorMyCourses from "../../components/organisms/HeaderInstructorMyCourses";
import InstructorCoursesCard from "../../components/molecules/InstructorCoursesCard";
import InstructorMyCoursesCard from "../../components/molecules/InstructorMyCoursesCard";
import axios from 'axios'
import Fiter from "../../components/molecules/Filter";

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
   //console.log(Number(localStorage.getItem("InstID")))
   //console.log(Number(localStorage.getItem("Subject")))
   //console.log(localStorage.getItem("H1"))
   setCourseArray(response.data)
 }).catch((error) => console.log(error))
}


useEffect(()=>{
  if(localStorage.getItem("Subject")==""){
    if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){
         getCourses()
    }
    else{
      getCoursesFilterPrice()
    }
}
else{
  if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){
    getCoursesFilterSubject()
}
  else{
    getCoursesFilterSubjectandPrice()
  }
}
})

  return (
    <div className="bg-bc h-screen">
      <Head>
        <title>My Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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

export default mycourses;
