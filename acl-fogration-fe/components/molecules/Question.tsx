import React, { useState } from 'react'
import axios from 'axios'
const refresh = () => window.location.reload();
const Question = () => {
  
  const addQuestion = () => {

    axios.post("http://localhost:8000/createQuestion",
      {Question_Name: questionName,
      Question_Correct_Answer: questionCorrectAnswer,
      exam_id: localStorage.getItem("exam_id"),
      questionChoice1: questionChoice1, 
      questionChoice2: questionChoice2, 
      questionChoice3: questionChoice3, 
      questionChoice4: questionChoice4}
  
      ).then((response) => {
      }).catch((error) => console.log(error))
  


    localStorage.setItem('question'+ `${i}` + 'CourseID', questionCourseID);
    localStorage.setItem('question'+`${i}`+'Name',questionName)
    localStorage.setItem('question'+`${i}`+'Choice1',questionChoice1)
    localStorage.setItem('question'+`${i}`+'Choice2',questionChoice2)
    localStorage.setItem('question'+`${i}`+'Choice3',questionChoice3)
    localStorage.setItem('question'+`${i}`+'Choice4',questionChoice4)
    localStorage.setItem('question'+`${i}`+'CorrectAnswer',questionCorrectAnswer)

     console.log(
       "question" + `${i}` + "CourseID",
       localStorage.getItem("question" + `${i}` + "CourseID")
     );
    console.log(('question'+`${i}`+'Name'),localStorage.getItem('question'+`${i}`+'Name'))
    console.log(('question'+`${i}`+'Choice1'),localStorage.getItem('question'+`${i}`+'Choice1'))
    console.log(('question'+`${i}`+'Choice2'),localStorage.getItem('question'+`${i}`+'Choice2'))
    console.log(('question'+`${i}`+'Choice3'),localStorage.getItem('question'+`${i}`+'Choice3'))
    console.log(('question'+`${i}`+'Choice4'),localStorage.getItem('question'+`${i}`+'Choice4'))
    console.log(('question'+`${i}`+'CorrectAnswer'),localStorage.getItem('question'+`${i}`+'CorrectAnswer'))  
    setI(i + 1);
    setQuestionName("");
    setQuestionChoice1("");
    setQuestionChoice2("");
    setQuestionChoice3("");
    setQuestionChoice4("");
    setQuestionCorrectAnswer("");
    console.log(i);
    refresh;
  }

const [questionCourseID, setQuestionCourseID] = useState("");
const handleCourseID = (event) => {
  setQuestionCourseID(event.target.value);
  // console.log(questionName)
};
  const [i, setI] = useState(1);
  // const addingQuestion = event => { setI(i) }; 
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
// const [x,setX]=useState("");
// setX(localStorage.getItem("courseID"));

  return (
    <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-11/12 justify-center"> 
      {/* <div className="text-l mx-2"> Course ID </div>
      <input
        value={localStorage.getItem("courseID")}
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
        onClick={handleCourseID}
      /> */}
      <div className="m-2 text-l">Question {i}</div>
      <textarea
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
        onChange={handleQuestionName}
      />
      <div className="mx-2 text-l">Choice 1</div>
      <input
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
        onChange={handleChoice1}
      />
      <div className="mx-2 text-l">Choice 2</div>
      <input
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
        onChange={handleChoice2}
      />
      <div className="mx-2 text-l">Choice 3</div>
      <input
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
        onChange={handleChoice3}
      />
      <div className="mx-2 text-l">Choice 4</div>
      <input
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
        onChange={handleChoice4}
      />
      <div className="mx-2 text-l">Correct choice</div>
      <input
        type="number"
        min="1"
        max="4"
        className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2  rounded-md h-12"
        onChange={handleCorrectAnswer}
      />
      <div className="flex justify-center flex-row">
        <button
          className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-80"
          onClick={addQuestion}
        >
          Add New Question
        </button>
        <button className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-80" onClick={addQuestion}>
          Submit Exam
        </button>
      </div>
    </div>
  );
}

export default Question