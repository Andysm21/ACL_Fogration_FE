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
  // console.log(localStorage.getItem("Subject"))
  
if(localStorage.getItem("isCorp")=="false"){
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
}

else{
  if(localStorage.getItem("Subject")==""){
    if(localStorage.getItem("Rating")==""){
      if(localStorage.getItem("Search")=='' || localStorage.getItem("Search")==""){
        getCourses()
        localStorage.setItem("Search","")
        console.log("ALL")

       //  console.log("Hi")
       }
       else{
         getCoursesSearch();
        console.log("serach")
        }
    }
    else{
        getCoursesFilterRating()
        localStorage.setItem("Search","")
        console.log("Rate")
    }
}
else{
  if(localStorage.getItem("Rating")==""){
      getCoursesFilterSubject()
      console.log("Subject")

  }
  else{
    getCoursesFilterSubjectandRating()
    console.log("SubjandRate")

  }
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
          <HeaderUserMyCourses/>

          <UserMyCoursesCard courses={courseArray}/>
        </div>
      </Layout>
    </div>
  );
};

export default mycourses;
