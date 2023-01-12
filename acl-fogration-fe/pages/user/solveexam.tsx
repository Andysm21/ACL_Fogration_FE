import {  QuestionMark } from '@mui/icons-material'
import Link from 'next/link'
import { GiSoulVessel } from 'react-icons/gi'
import Layout from '../../components/templates/Layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { formControlClasses } from '@mui/joy'

const Exams = {
    Exam_ID:1,
    Exam_Questions : [
        {Question_ID:1,
        Question_Name:"How do you initialize an array in C ?",
        Question_Choices:["int arr[3] = (1,2,3);","int arr(3) = {1,2,3};"," int arr[3] = {1,2,3};","int arr(3) = (1,2,3);"],
        Question_Correct_Answers:"int arr[3] = {1,2,3};"
        }, {
        Question_ID:2,
        Question_Name:"How do you instantiate an array in Java ?",
        Question_Choices:["int arr[] = new int(3);","int arr[];"," int arr[] = new int[3];","int arr() = new int(3);"],
        Question_Correct_Answers:"int arr[] = new int[3];"  
        },{
        Question_ID:3,
        Question_Name:"How do you initialize an array in C ?",
        Question_Choices:["int arr[3] = (1,2,3);","int arr(3) = {1,2,3};"," int arr[3] = {1,2,3};","int arr(3) = (1,2,3);"],
        Question_Correct_Answers:"int arr[3] = (1,2,3);"
        }
    ],
    Exam_Grade:90,
    Exam_Instructor_ID:1,
    Exam_Course_ID:2

}
const submitAnswers = () => {
  // var type ;
  // var userid= Number(localStorage.getItem("user_id"));

  // if(localStorage.getItem("Type")=="Corp"){
  //   type=2;
  // }
  // else if(localStorage.getItem("Type")=="User"){
  //   type=1;
  // }

  //   axios.post("http://localhost:8000/createStudentTakeExam",
  //   {
  //     StudentTookExam_Student_ID:userid,
  //     StudentTookExam_Exam_ID:Number(localStorage.getItem("CurrentExamID")),
  //     StudentTookExam_Type:type,

  //   }).then((response) => {
  //     console.log("StudentTookExamCreated")
  // }).catch((error) =>console.log("ERROR"))


for(let i =0;i<solved.length;i++){
  var questions=[];
  var answers=[];
  var solvedSplit = solved[i].split("-")
  questions.push(solvedSplit[0]);
  answers.push(solvedSplit[1])
}
var type ;
var userid= Number(localStorage.getItem("user_id"));

if(localStorage.getItem("Type")=="Corp"){
  type=2;
}
else if(localStorage.getItem("Type")=="User"){
  type=1;
}
for(let i=0;i<Solutions.length;i++){
  console.log(Solutions[i].substring(Solutions[i].length-1))

  axios.post("http://localhost:8000/SubmitAnswers",
  {
    QID:Number(Solutions[i].substring(0,Solutions[i].length-1)),
    EID:Number(localStorage.getItem("CurrentExamID")),
    UserID:Number(localStorage.getItem("user_id")),
    answer:Solutions[i].substring(Solutions[i].length-1),
    Type:type
  }).then((response) => {
    console.log("Submitted for "+Number(Solutions[i].substring(0,Solutions[i].length-1)))
}).catch((error) => console.log("Error f Submit"))
}
}




interface answer { 
    Question_ID:number,
    Question_Answer:string
}
const solved = [];
var flag =0;
var Solutions=[];

const solveexam = () => {
  
  const [Exam,SetExam]=useState({
    Exam_ID:NaN,
    Exam_Questions : [],
    Exam_Grade:NaN,
    Exam_Instructor_ID:NaN,
    Exam_Course_ID:NaN
  });


  const fetchExam = ()=>
{
  axios.post("http://localhost:8000/getExam",
  {
    Exam_ID:Number(localStorage.getItem("CurrentExamID")),
    Course_ID:Number(localStorage.getItem("CourseID")),
    UserID:Number(localStorage.getItem("user_id")),
  }).then((response) => {
    SetExam(response.data);

    // console.log(Number(localStorage.getItem("ExamID")));
    // console.log(Number(localStorage.getItem("user_id")))
    // console.log(response.data)
  }).catch((error) => console.log(error))
}
var length =Exam?.Exam_Questions.length;
if(flag==0){
for(let i=0;i<length;i++){
  Solutions[i]=2;
  if(i==length-1){
    flag=1
  }
}
}
const [EID,SetEID]=useState(0);
useEffect(() => {
  fetchExam();
  SetEID(Number(localStorage.getItem("CurrentExamID")));
  // console.log(Exam)
})
  return (
    <div>
      <Layout>
        <div className="bg-bc text-white p-2 flex flex-col h-100vh">
          <div className="font-bold text-3xl text-center">
            Exam {EID}
          </div>
          
          {/* div el exam beli choices */}
          
          <div className="">
            
            {Exam?.Exam_Questions?.map((question, index) => {
    
            return (
                <div
                  key={index}
                  className="bg-black3  border-2 border-bc rounded-md "
                >
                  <h1 className="font-bold text-2xl m-2">
                    Q{question?.Question_ID}) {question?.Question_Name}
                  </h1>
                  <div className="flex flex-col text-xl m-2 justify-center  ">
                    {question?.Question_Choices.map((questionChoice, index) => {
                      return (
                        <div key={index} className="p-1">
                          ({index + 1}) {questionChoice}
                        </div>
                      );
                    })}
                    <input
                      type="number"
                      min="1"
                      max="4"
                      key={index}
                      className="text-black rounded-md w-52 p-1"
                      onChange={(e) => (
                        Solutions[index]=question?.Question_ID + e.target.value,
                        //solved.push(question?.Question_ID + e.target.value),
                        console.log(Solutions[index])                        
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end items-end m-2">
            <Link href="/user/score">
              <button
                onClick={submitAnswers}
                className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-52 "
              >
                Submit Answers
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default solveexam