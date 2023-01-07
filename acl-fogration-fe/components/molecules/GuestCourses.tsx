import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";



import { useEffect, useState } from "react";
import {courses} from '../../interfaces'
const GuestCourses:React.FC<{ courses }> = ({courses }) => {

  // const handleButtonClick = ()=>{
  //   localStorage.setItem("Course",course.Course_ID+"")
  // }


  if (courses.length === 0) {
    return <div className="text-center text-white text-bold"> No courses</div>;
  }

  const stars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <div>
          <AiFillStar />
        </div>
      );
    }
    return stars;
  };
     const discount =(discount:number,price:number) =>{
      if(discount == 0){
    return <h1 className=" text-violet-400 text-4xl font-bold ">
                $${price}
              </h1>

  }
  else{ 
    <div className="flex flex-row">
    <div className=" text-violet-400 text-4xl font-bold line-through">{price} $$</div>
     <h1 className=" text-violet-400 text-4xl font-bold ">
                $${price * (1-discount)}
              </h1>
     </div>
  }
  }
  return (
    <div className="grid grid-cols-2 text-white bg-bc gap-4">
      {courses?.map((course) => (
        <div key={course.Course_Title} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 ">
          {/* //div el title bel kalam */}
          <div className="flex flex-col">
            {/* //div el title bel rating */}
            <div className="flex flex-col text-3xl">
              <div className="Font-bold  text-white">{course.Course_Title}</div>
              <div className="flex flex-row  ">
                {stars(course.Course_Rating)}
              </div>
            </div>
            {/* //div el kalam eswd */}
            <div className="bg-black3 flex flex-col  gap-2 my-2">
              {course.Course_Trainee.length} enrolled students
              <div className="text-white flex flex-row">
                Taught by
                <div className="text-black3">.</div>
                <Link href="/guest/instrcutor">
                  {/* // 23deli el link */}
                  <div className="text-violet-400">
                    {course.Course_Instructor.Instructor_FirstName}
                  </div>
                </Link>
              </div>
              {/* /*div el country*/}
              <div className="flex flex-row gap-1 items-center">
                <BsGlobe2 />
                {course.Course_Country}
              </div>
              {/* <h1 className=" text-violet-400 text-4xl font-bold ">
                $${course.Course_Price}
              </h1> */}
             {discount(course.Course_Discount, course.Course_Price)}

            </div>
          </div>
          {/* //div el video bel se3r wel button */}
          <div className="flex flex-col justify-center ">
            {/* //div el video nafso */}
            <div>
              <Link href="https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2">
                <img
                  src="/images/pausedvideo.png"
                  alt="No video posted yet 😅"
                />
              </Link>
            </div>
            {/* //h1 el se3r */}
            <div className="flex flex-row justify-between my-2">
              {/* <Link href={"http://localhost:3000/guest/"+course.Course_ID}> */}
              <Link href="guest/course">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-80" onClick={()=>{
                  localStorage.setItem("Course",course?.Course_ID+"")
                  // console.log(localStorage.getItem("CourseIIDD"))
                  }}>
                  View Course
                </button>
              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestCourses;
