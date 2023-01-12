import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/templates/Layout'
import axios from 'axios';
import FileDownload from 'js-file-download';

// let Question_Correct_Answers = 5;
// let Questions = 15;
//  let grade = Math.ceil((Question_Correct_Answers / Questions) * 100);



//  let grade ;



// const vowel = () =>{
//   if(grade == 'A')
//   return "an";
//   else 
//   return "a";
// // }
// let Question_Correct_Answers ;
// let Questions ;
const score = () => {
  const[grade,SetGrade]=useState(0);
  const[Question_Correct_Answers,SetQCA]=useState(0);
  const[Questions,SetQ]=useState(0);
  const[Progress,SetProgress]=useState(0);
  const[CourseID,SetCourseID]=useState(0);

  const text = (Progress:Number) => {
    if(Progress == 100){
      return (<div className="text-violet-400 text-7xl text-center ">
        Congratulations! You finished the course
      </div>
      )
    }else{
    if (grade < 50) {
        return (
          <div className="text-violet-400 text-7xl text-center ">
            OPPS!
          </div>
        );
    }
    else
        return (
          <div className="text-violet-400 text-7xl text-center ">
           Great Job!
          </div>
        );
    }
}
const suggest = () => {
    if (grade < 50) {
      return (
        <div className="text-white text-l text-center ">
              we suggest you go through the course again and retake the exam one more time before moving on to the next subtitle
        </div>
      );
    } else
      return (
        <div >
         
        </div>
      );
}

function retake(){
  var type ;
  var userid= Number(localStorage.getItem("user_id"));

  if(localStorage.getItem("Type")=="Corp"){
    type=2;
  }
  else if(localStorage.getItem("Type")=="User"){
    type=1;
  }
  axios.post("http://localhost:8000/retakeExam",
  {
    UserID:userid,
    EID:Number(localStorage.getItem("CurrentExamID")),
    Type:type,
  }).then((response) => {
console.log("WENT TO RETAKE")
}).catch((error) => console.log(error))
  
}
var flag = false;
function getScore (){ 
   var type ;
  var userid= Number(localStorage.getItem("user_id"));

  if(localStorage.getItem("Type")=="Corp"){
    type=2;
  }
  else if(localStorage.getItem("Type")=="User"){
    type=1;
  }
  axios.post("http://localhost:8000/examGrades",
  {
    UserID:userid,
    EID:Number(localStorage.getItem("CurrentExamID")),
    Type:type,
  }).then((response) => {
    console.log(response.data)
    SetGrade(response.data.Grade);
    SetQ(response.data.Model.length);
    SetQCA(response.data.TotalRight);
    SetProgress(response.data.Progress);
    SetCourseID(response.data.Course_ID)
}).catch((error) => console.log(error))
}
useEffect(() => {
  getScore();
  // console.log(Exam)
})

const finished = (Progress : Number) =>{
  var type ;
  if (Progress == 100){ 
      if(localStorage.getItem("Type")=="Corp"){
        type=2;
      }
      else if(localStorage.getItem("Type")=="User"){
        type=1;
      }
    axios.post("http://localhost:8000/sendCertificate",
    {
      userid:Number(localStorage.getItem("user_id")),
      courseId:CourseID,
      Type:type,
    }).then((response) => {
      console.log(response.data)
     
  }).catch((error) => console.log(error))
   
      return (
      <button onClick = {download} className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded  w-72" >
        Download Certificate
      </button>
    )
}
}

const download = () =>{
  console.log("Cirteficate Downloaded");
  axios.get("http://localhost:8000/downloadCertificate",{responseType:'blob'}).then((res)=>{
  FileDownload(res.data,'Certificate.pdf')
  }).catch((error) => console.log(error))
}
var final = false;
  return (
  
    <div>
     
      <Layout>
        <div className="bg-bc h-screen w-full flex flex-col justify-center gap-1">
          {text(Progress)}
          <div className="text-white text-center  text-3xl flex flex-row items-center justify-center">
            You have answered <div className="text-bc">.</div>
            <div className="text-violet-400"> {Question_Correct_Answers}</div>
            <div className="text-bc">.</div>
            questions out of
            <div className="text-bc">.</div>
            <div className="text-violet-400"> {Questions} </div>
            <div className="text-bc">.</div>
            correctly
          </div>
          <div className="text-white text-3xl  text-center">You got {grade} %</div>

          {/* {suggest()} */}
          <div className="text-white text-center  text-2xl">
            Would you like to
          </div>

          <div className="flex flex-row gap-2 justify-center">
            <Link href="/user/solveexam">
            <button className="bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded  w-72" onClick={retake}>
              Retake Exam
            </button>
            </Link>
            <Link href="/user/correctanswers">
            <button className="bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded w-72">
              Show Correct Answers
            </button>
            </Link>
            {finished(Progress)}
            
          </div>
          <div className="text-white text-center font-light"> 
            *By showing correct answers you will not be able to retake exam
          </div>
        </div>
      </Layout>
    </div>
    
  );  
}

export default score