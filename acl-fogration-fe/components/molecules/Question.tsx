import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
let i = 1;
const Question = () => {
  const addQuestion = () => {
    localStorage.setItem('question'+`${i}`+'Name',questionName)
    localStorage.setItem('question'+`${i}`+'Choice1',questionChoice1)
    localStorage.setItem('question'+`${i}`+'Choice2',questionChoice2)
    localStorage.setItem('question'+`${i}`+'Choice3',questionChoice3)
    localStorage.setItem('question'+`${i}`+'Choice4',questionChoice4)
    localStorage.setItem('question'+`${i}`+'CorrectAnswer',questionCorrectAnswer)


    console.log(('question'+`${i}`+'Name'),localStorage.getItem('question'+`${i}`+'Name'))
    console.log(('question'+`${i}`+'Choice1'),localStorage.getItem('question'+`${i}`+'Choice1'))
    console.log(('question'+`${i}`+'Choice2'),localStorage.getItem('question'+`${i}`+'Choice2'))
    console.log(('question'+`${i}`+'Choice3'),localStorage.getItem('question'+`${i}`+'Choice3'))
    console.log(('question'+`${i}`+'Choice4'),localStorage.getItem('question'+`${i}`+'Choice4'))
    console.log(('question'+`${i}`+'CorrectAnswer'),localStorage.getItem('question'+`${i}`+'CorrectAnswer'))

    i++;
    console.log(i)
  }
  const [questionName,setQuestionName] = useState('')
  const handleQuestionName = event => {
  setQuestionName(event.target.value);
  // console.log(questionName)
  };
  const [questionChoice1,setQuestionChoice1] = useState('')
  const handleChoice1 = event => {
  setQuestionChoice1(event.target.value);
  // console.log(questionName)
  };
  const [questionChoice2,setQuestionChoice2] = useState('')
  const handleChoice2 = event => {
  setQuestionChoice2(event.target.value);
  // console.log(questionName)
  };
  const [questionChoice3,setQuestionChoice3] = useState('')
  const handleChoice3 = event => {
  setQuestionChoice3(event.target.value);
  // console.log(questionName)
  };
  const [questionChoice4,setQuestionChoice4] = useState('')
  const handleChoice4 = event => {
  setQuestionChoice4(event.target.value);
  // console.log(questionName)
  };
   const [questionCorrectAnswer,setQuestionCorrectAnswer] = useState('')
  const handleCorrectAnswer = event => {
  setQuestionCorrectAnswer(event.target.value);
  // console.log(questionName)
  };


  return (
    <div className="bg-bc p-2 m-2 rounded-lg flex flex-col ">
        <div className="text-l mx-2"> Question ID </div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md" 
         /> 
            <div className="m-2 text-l">Question </div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         onChange={handleQuestionName}
         />   
          <div className="mx-2 text-l">Coiche 1</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
          onChange={handleChoice1}
        /> 
         <div className="mx-2 text-l">Coiche 2</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         onChange={handleChoice2}
         /> 
         <div className="mx-2 text-l">Coiche 3</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         onChange={handleChoice3}
         /> 
         <div className="mx-2 text-l">Coiche 4</div>
           <input className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         onChange={handleChoice4}
         /> 
          <div className="mx-2 text-l">Correct choice</div>
           <input type="number" min="1" max="4" className = "mx-2 enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-72  border-white rounded-md"
         onChange={handleCorrectAnswer}
         /> 
         <button className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72" 
            onClick={addQuestion} >
        Add New Question</button>
        </div>

  )
}

export default Question