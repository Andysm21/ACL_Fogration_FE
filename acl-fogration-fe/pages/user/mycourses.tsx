import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import UserMyCoursesCard from "../../components/molecules/UserMyCoursesCard";
import HeaderUserMyCourses from "../../components/organisms/HeaderUserMyCourses";
import axios from "axios";

const courses = [
  {
    id: "1",
    name: "CSEN702",
    description: "This is a course",
    instructor: "Ahmed",
    totalHours: 6,
    price: 40,
    rating: 5,
    image:
      "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0b1b0b1b0b1b0b1b0b1b0b.jpg",
    category: "CS",
    type: "Lecture",
  },
  {
    id: '2',
    name: "CSEN704",
    description: "This is a course",
    instructor: "Ahmed",
    totalHours: 8,
    price: 40,
    rating: 4,
    image:
      "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0b1b0b1b0b1b0b1b0b1b0b.jpg",
    category: "CS",
    type: "Lecture",
  },
  {
    id: '3',
    name: "CSEN703",
    description: "This is a course",
    instructor: "Ahmed",
    totalHours: 4,
    price: 40,
    rating: 1,
    image:
      "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0b1b0b1b0b1b0b1b0b1b0b.jpg",
    category: "CS",
    type: "Lecture",
  },
];

const mycourses: NextPage = () => {


  var [courseArray,setCourseArray]=useState([]);

  function getCourses(){
    if(localStorage.getItem("isCorp")=="true"){
     axios.post("http://localhost:8000/myCoursesCorp",{
      ID: Number(localStorage.getItem("user_id"))
     }
    ).then((response) => {
      console.log(Number(localStorage.getItem("user_id")))

      setCourseArray(response.data)
    }).catch((error) => console.log(error))
  }
else{
    axios.post("http://localhost:8000/myCoursesInd",{
     ID: Number(localStorage.getItem("user_id"))
    }
   ).then((response) => {
     console.log(Number(localStorage.getItem("user_id")))

     setCourseArray(response.data)
   }).catch((error) => console.log(error))
 }
}
  function getCoursesFilterPrice(){
    axios.post("http://localhost:8000/filterPriceInst",{
     Instructor_ID: Number(localStorage.getItem("InstID")),
     FilterPrice1: Number(localStorage.getItem("MinPrice")),
     FilterPrice2:Number(localStorage.getItem("MaxPrice"))
    }
   ).then((response) => {
     setCourseArray(response.data)
   }).catch((error) => console.log(error))
 }

 function getCoursesFilterSubject(){
  axios.post("http://localhost:8000/filterSubjectInst",{
   Instructor_ID: Number(localStorage.getItem("InstID")),
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
   Instructor_ID: Number(localStorage.getItem("InstID")),
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
  console.log(localStorage.getItem("user_id"));
  getCourses();
//   if(localStorage.getItem("Subject")==""){
//     if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){
//          getCourses()
//           localStorage.setItem("InstID","2")
//     }
//     else{
//       getCoursesFilterPrice()
//         localStorage.setItem("InstID","2")
//     }
// }
// else{
//   if(localStorage.getItem("MaxPrice")=="" && localStorage.getItem("MinPrice")==""){
//     getCoursesFilterSubject()
//     localStorage.setItem("InstID","2")
// }
//   else{
//     getCoursesFilterSubjectandPrice()
//     localStorage.setItem("InstID","2")
//   }
// }
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
          <HeaderUserMyCourses/>

          <UserMyCoursesCard courses={courseArray}/>
        </div>
      </Layout>
    </div>
  );
};

export default mycourses;
