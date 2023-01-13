import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import InstructorViewInstructor from "../../components/molecules/InstructorViewInstructor";
import { useRouter } from "next/router";

const person = {
  _id: {
    $oid: "636880e12886948f062b493e",
  },
 Instructor_ID: 4,
  Instructor_username: "Pasha",
  Instructor_Email: "Pasha@gmail.com",
  Instructor_Password: "1234",
  Instructor_FirstName:"Hana",
  Instructor_LastName:"Pasha",
  Instructor_Gender:"Female",
  Instructor_Country: "Egypt",
  

  Instructor_Courses: [

    {
      _id: {
        $oid: "666820e1288794o098062b493e",
      },
      Course_ID: 4,
      Course_Title: "asda",
      Course_Subject: "Computer Science",
      Course_Description: "Data Structures and Algorithms",
      Course_Price: 0,
      Course_Rating: 5,
      Course_Instructor: "Malak",
      Course_Hours: 5,
      Course_Country: "Egypt",
      Course_Discount: 10,
      Course_Discount_Duration: 5,
      Course_Subtitle: [
        {
          Subtitle_ID: 1,
          Subtitle_Name: "S1",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
        {
          Subtitle_ID: 2,
          Subtitle_Name: "S2",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
      ],
      Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
      Course_Review: ["Very Good Course"],
      Course_Rate: ["zeft"],
      Course_Exam: [
        { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
      ],
    },
  ],
  Instructor_Biography: "Hating Uni",
  Instructor_Ratings:[5,2],
  Instructor_Reviews:["I Loved your materials,It helped alot.Keep the great work!","Would have been better if you did more examples but other than that GREAT JOB!!"]
};

const instructor: NextPage = () => {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="">
          <InstructorViewInstructor user={person} />
        </div>
      </Layout>
    </div>
  );
};
}
export default instructor;
