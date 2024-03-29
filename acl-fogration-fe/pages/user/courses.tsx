import React, { useEffect, useState } from "react";
import Layout from "../../components/templates/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import UserCoursesCard from "../../components/molecules/UserCoursesCard";
import HeaderUserCourses from "../../components/organisms/HeaderUserCourses";
import axios from "axios";
import { useRouter } from "next/router";


const courses: NextPage = () => {
  var [CourseArray,setCourseArray]=useState([]);
  const [isCorporate, setIsCorporate]= useState("false");

  // useEffect(() => {
  //   setIsCorporate(localStorage.getItem("isCorp"))
  // })

  

  function getCourses(){
      if(localStorage.getItem("isCorp")=="true"){
        axios.get("http://localhost:8000/viewCoursesCorporate"
       ).then((response) => {
        //  console.log(Number(localStorage.getItem("user_id")))
   
         setCourseArray(response.data)
       }).catch((error) => console.log(error))
     }
   else{
       axios.get("http://localhost:8000/viewCoursesALL"
      ).then((response) => {
        // console.log(Number(localStorage.getItem("user_id")))
   
        setCourseArray(response.data)
      }).catch((error) => console.log(error))
    }
   }
  

  var x =useEffect(() =>{getCourses()},[])

  
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

function getPopularCourses(){

  axios.post("http://localhost:8000/mostViewedCourses",{}
 ).then((response) => {
   setCourseArray(response.data)
   console.log(CourseArray)
 
 }).catch((error) => console.log(error))
}




useEffect(()=>{
  console.log(localStorage.getItem("currency"))
  // console.log(localStorage)
if(localStorage.getItem("popularCourses")=="false"){
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
        // console.log("ALL")

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

}
else{
  getPopularCourses()
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
    <div className="bg-bc h-screen">

      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon 1.ico" />
      </Head>

      <Layout>
        <div>
          <HeaderUserCourses/>
          <UserCoursesCard courses={CourseArray}/>
        </div>
      </Layout>
    </div>
  );
};


}
export default courses;
