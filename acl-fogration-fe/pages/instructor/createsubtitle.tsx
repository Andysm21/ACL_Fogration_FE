import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import CourseCreation from '../../components/molecules/CourseCreation';
import SubtitleCreation from "../../components/molecules/SubtitleCreation";
import { useRouter } from "next/router";

const createcourse: NextPage = () => {
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
        <title>Create a course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-bc h-100vh p-2 flex flex-col ">
          <h1 className="text-3xl font-bold text-white">Create Subtitle</h1>
          <div className="bg-black3 rounded-md flex flex-col text-white items-center justify-center p-2">
            <SubtitleCreation />
          </div>
        </div>
      </Layout>
    </div>
  );
};
}
export default createcourse;
