import React from 'react'
import Link from 'next/link'
import Layout from '../../components/templates/Layout'
let Question_Correct_Answers = 9;
let Questions = 15;
let grade = 'B';
const text = () => {
   let score = (Question_Correct_Answers / Questions) * 100;
    if (score < 50) {
        return (
          <div className="text-violet-400 text-7xl text-center font-bold">
            OPPS!
          </div>
        );
    }
    else
        return (
          <div className="text-violet-400 text-7xl text-center font-bold">
           Great Job!
          </div>
        );
}
const suggest = () => {
    let score = (Question_Correct_Answers / Questions) * 100;
    if (score < 50) {
      return (
        <div className="text-white text-l text-center font-bold">
              we suggest you go through the course again and retake the exam one more time before moving on to the next subtitle
        </div>
      );
    } else
      return (
        <div >
         
        </div>
      );
}
const vowel = () =>{
  if(grade == 'A')
  return "an";
  else 
  return "a";
}
const score = () => {
  return (
    <div>
      <Layout>
        <div className="bg-bc h-screen w-full flex flex-col justify-center gap-1">
          {text()}
          <div className="text-white text-center font-bold text-3xl flex flex-row items-center justify-center">
            You have answered <div className="text-bc">.</div>
            <div className="text-violet-400"> {Question_Correct_Answers}</div>
            <div className="text-bc">.</div>
            questions out of
            <div className="text-bc">.</div>
            <div className="text-violet-400"> {Questions} </div>
            <div className="text-bc">.</div>
            correctly
          </div>
          <div className="text-white text-3xl font-bold text-center">Your got {vowel()} {grade}</div>

          {/* {suggest()} */}
          <div className="text-white text-center font-bold text-2xl">
            Would you like to
          </div>

          <div className="flex flex-row gap-2 justify-center">
            <Link href="/user/solveexam">
            <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded  w-72">
              Retake Exam
            </button>
            </Link>
            <Link href="/user/correctanswers">
            <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72">
              Show Correct Answers
            </button>
            </Link>
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