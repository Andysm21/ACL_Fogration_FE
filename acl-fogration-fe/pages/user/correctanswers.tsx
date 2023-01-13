import {  QuestionMark } from '@mui/icons-material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GiSoulVessel } from 'react-icons/gi'
import Layout from '../../components/templates/Layout'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import axios from 'axios'
import { useRouter } from 'next/router'
let Question_Correct_Answers = 9;
let Questions = 15;
let grade = 'B';
const Exams = {
    Exam_ID:1,
    Exam_Questions : [
        {Question_ID:1,
        Question_Name:"How do you initialize an array in C ?",
        Question_Choices:["int arr[3] = (1,2,3);","int arr(3) = {1,2,3};"," int arr[3] = {1,2,3};","int arr(3) = (1,2,3);"],
        Question_Correct_Answer:"int arr[3] = {1,2,3};",
        Question_Solved_Answer:"int arr[3] = {1,2,3};"
        }, {
        Question_ID:2,
        Question_Name:"How do you instantiate an array in Java ?",
        Question_Choices:["int arr[] = new int(3);","int arr[];"," int arr[] = new int[3];","int arr() = new int(3);"],
        Question_Correct_Answer:"int arr[] = new int(3);" ,
        Question_Solved_Answer:"int arr[] = new int(3);"
        },{
        Question_ID:3,
        Question_Name:"How do you initialize an array in C ?",
        Question_Choices:["int arr[3] = (1,2,3);","int arr(3) = {1,2,3};"," int arr[3] = {1,2,3};","int arr(3) = (1,2,3);"],
        Question_Correct_Answer:"int arr[3] = (1,2,3);",
        Question_Solved_Answer:"int arr(3) = {1,2,3};"
        }
    ],
    Exam_Grade:90,
    Exam_Instructor_ID:1,
    Exam_Course_ID:2

}
const submitAnswers = () => {
    console.log(solved);

}
interface answer { 
    Question_ID:number,
    Question_Answer:string
}
const solved = [];
const correct = (Question_Correct_Answer, Question_Solved_Answer) => {
    if( Question_Solved_Answer == Question_Correct_Answer)
    return <div className = "text-green-400 flex flex-row justify-center items-center gap-1"> <TiTick size={20}/> <div>Correct</div> </div>
    else
    return <div className="text-red-400 flex flex-row justify-center items-center gap-1"> <ImCross size={15}/> <div>Wrong</div></div>
}
const vowel = () =>{
  if(grade == 'A')
  return "an";
  else 
  return "a";
}

const correctanswers = () => {
  const[grade,SetGrade]=useState(0);
  const[Question_Correct_Answers,SetQCA]=useState(0);
  const[Questions,SetQ]=useState(0);
  const[Model,SetM]=useState([]);
  const[Student,SetS]=useState([]);

  
    const [Exam,SetExam]=useState({
    Exam_ID:NaN,
    Exam_Questions : [],
    Exam_Grade:NaN,
    Exam_Instructor_ID:NaN,
    Exam_Course_ID:NaN
  });

  function fetchExam ()
  {
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
      SetM(response.data.Model)
      SetS(response.data.Student)
      SetGrade(response.data.Grade);
      SetQ(response.data.Model.length);
      SetQCA(response.data.TotalRight)
  }).catch((error) => console.log(error))
  
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

  useEffect(() => {
    fetchExam();
    // console.log(Exam)
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
    <div>
      <Layout>
        <div className="bg-bc text-white p-2 flex flex-col h-100vh">
          <div className="font-bold text-3xl text-center">
            Exam {Exam.Exam_ID}
          </div>
          <div className="text-white text-center font-bold text-l flex flex-row items-center justify-center">
            You have answered <div className="text-bc">.</div>
            <div className="text-violet-400"> {Question_Correct_Answers}</div>
            <div className="text-bc">.</div>
            questions out of
            <div className="text-bc">.</div>
            <div className="text-violet-400"> {Questions} </div>
            <div className="text-bc">.</div>
            correctly
          </div>
          <div className="text-white text-l font-bold text-center">Your got {vowel()} {grade}</div>
          
          {/* div el exam beli choices */}
          <div className=" flex flex-col">
            {Exam.Exam_Questions?.map((question, index) => {
              return (
                <div
                  key={index}
                  className="bg-black3  border-2 border-bc rounded-md flex flex-row justify-between "
                >
                    <div>
                  <h1 className="font-bold text-2xl m-2">
                    Q{question.Question_ID}) {question.Question_Name}
                  </h1>
                  <div className="flex flex-col text-xl m-2 justify-center  ">
                    {question.Question_Choices.map((questionChoice, index) => {
                      return (
                        <div key={index} className="p-1">
                          ({index + 1}) {questionChoice}
                        </div>
                      );
                    })} 
                  </div>
                  </div>
                  <div  className="flex flex-col m-2 justify-center">
                     <div>Correct Answer</div>
                    <input
                      type="text"
                      disabled
                      className="text-white rounded-md w-52 p-1 bg-black2"
                     value={Model[index]}
                    />
                    <div>Your Answer</div>
                    <input
                      type="text"
                      disabled
                      className="text-white rounded-md w-52 p-1 bg-black2"
                     value={Student[index]}
                    />
                    {correct(Model[index],Student[index])}
                    </div>
                    
                </div>
              );
            })}
          </div>
          <div className="flex justify-end items-end m-2">
            <Link href="/user/viewmycourse">
              <button
                onClick={submitAnswers}
                className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-52 "
              >
                Go back to course
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
}
export default correctanswers;