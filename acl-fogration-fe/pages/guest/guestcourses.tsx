import React, { useEffect, useMemo } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import LayoutGuest from "../../components/templates/LayoutGuest";
import GuestCourses from "../../components/molecules/GuestCourses";

import HeaderGuest from "../../components/organisms/HeaderGuest";

import {useState} from 'react';
import axios from 'axios';


const guestcourses: NextPage = () => {
  var [CourseArray,setCourseArray]=useState([]);

  function getCourses(){
     axios.get("http://localhost:8000/viewCoursesALL"
    ).then((response) => {
      console.log(response.data)
      setCourseArray(response.data)
    }).catch((error) => console.log(error))
  }


  function getCoursesFilterPrice(){
    axios.post("http://localhost:8000/filterPrice",{
     FilterPrice1: Number(localStorage.getItem("MinPrice")),
     FilterPrice2:Number(localStorage.getItem("MaxPrice"))
    }
   ).then((response) => {
     setCourseArray(response.data)
   }).catch((error) => console.log(error))
 }

 function getCoursesFilterSubject(){
  axios.post("http://localhost:8000/filterSubject",{
    Course_Subject: localStorage.getItem("Subject"),
  }
 ).then((response) => {
   setCourseArray(response.data)
 }).catch((error) => console.log(error))
}

function getCoursesFilterSubjectandRating(){
  axios.post("http://localhost:8000/filterSubjectRating",{
    Course_Subject: localStorage.getItem("Subject"),
    Course_Rating: localStorage.getItem("Rating")
  }
 ).then((response) => {
   setCourseArray(response.data)
 }).catch((error) => console.log(error))
}

function getCoursesFilterRating(){
  axios.post("http://localhost:8000/filterRating",{
    Course_Rating: localStorage.getItem("Rating")
  }
 ).then((response) => {
   setCourseArray(response.data)
 }).catch((error) => console.log(error))
}
function getCoursesSearch(){
  axios.post("http://localhost:8000/Search",{
    searchR: localStorage.getItem("Search")
  }
 ).then((response) => {
   //console.log("Function:")
   // console.log(localStorage.getItem("Search"))
   // console.log("response data:")
   if(response.data == "")
    setCourseArray([])
   else
    setCourseArray(response.data)

 }).catch((error) => console.log(error))
}
useEffect(()=>{
  if(localStorage.getItem("Subject")==""){
    
    if(localStorage.getItem("Rating")==""){
      if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){

        if(localStorage.getItem("Search")=='' || localStorage.getItem("Search")==""){

         getCourses()
         localStorage.setItem("Search","")

        //  console.log("Hi")
        }
        else{
          getCoursesSearch();
        }
      }
      else{
        getCoursesFilterPrice()
        localStorage.setItem("Search","")

      }
    }
    else{
        getCoursesFilterRating()
        localStorage.setItem("Search","")

    }
}
else{
  if(localStorage.getItem("Rating")==""){
    if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){
      getCoursesFilterSubject()
    }
  }
  else{
    getCoursesFilterSubjectandRating()
  }
}
// localStorage.removeItem("Course")
// localStorage.setItem("Course",CourseArray[0]?.Course_ID+"")
// console.log(localStorage.getItem("Course"))

})


  return (
    <div className="bg-bc h-screen">
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutGuest>
        <div>
            <HeaderGuest/>
          <GuestCourses courses={CourseArray}/>
        </div>
      </LayoutGuest>
      
    </div>
  );
};

export default guestcourses;