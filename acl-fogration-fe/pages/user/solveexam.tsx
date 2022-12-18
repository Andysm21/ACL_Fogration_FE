import { QuestionMark } from '@mui/icons-material'
import React from 'react'
import { GiSoulVessel } from 'react-icons/gi'
import Layout from '../../components/templates/Layout'

const Exam = {
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
interface answer { 
    Question_ID:number,
    Question_Answer:string
}
const solved = [];

// const [answers, setAnswers] = React.useState([]);
    // const addanswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    //  answers.push(event.target.value);
    // };

const solveexam = () => {
  return (
    <div>
            <Layout>
                <div className="bg-bc text-white p-2 flex flex-col h-100vh">
                <div className="font-bold text-3xl text-center">Exam {Exam.Exam_ID}</div>
                {/* div el exam beli choices */}
                <div className="">
                {Exam.Exam_Questions?.map((question,index) => {return (
                    <div key={index} className="bg-black3  border-2 border-bc rounded-md ">
                        <h1 className="font-bold text-2xl m-2">{question.Question_Name}</h1>
                        <div className="flex flex-col text-xl m-2 justify-center  ">
                            {question.Question_Choices.map((questionChoice,index) =>{return(            
                                <div  key={index} className="p-1">({index+1}) {questionChoice}</div>
                            )})}
                             <input className="text-black rounded-md w-52 p-1" onChange={(e) => (solved.push((question.Question_ID + e.target.value)),console.log(solved))}/>
                        </div>
                        
                    </div>
                    
                )})}
                </div>
                <div className="flex justify-end items-end m-2">
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-52 ">Submit Answers</button>
                </div>
                </div>
                
            </Layout>

    </div>
  )
}

export default solveexam