import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import InstructorCourseCard from "../../components/molecules/InstructorCourseCard";
import  Axios  from "axios";
import { useRouter } from "next/router";


const viewcourse: NextPage = () => {

  var [courseArray,setCourseArray]=useState([]);

  function getCourses(){
    console.log("I am here view course")
     // Axios.post("http://localhost:8000/viewCourse",{id:Number(localStorage.getItem("CourseIIDD"))}
      var x = Number(localStorage.getItem("CourseID"));

         Axios.post(`http://localhost:8000/viewCourse/${x}`
 
    ).then((response) => {
      setCourseArray(response.data)
      console.log(response.data)
      console.log(courseArray)
    }).catch((error) => console.log(error))
  }
 
   
  useEffect(() => {
   // if(localStorage.getItem("Course")!=undefined){
   getCourses();
  }, []);

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
        <title>View Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon 1.ico" />
      </Head>

      <Layout>
        <div className="">
          <InstructorCourseCard course={courseArray} />
        </div>
      </Layout>
    </div>
  );
};
}
export default viewcourse;
