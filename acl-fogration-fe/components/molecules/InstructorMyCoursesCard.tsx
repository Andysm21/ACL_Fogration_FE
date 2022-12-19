import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill, BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

const InstructorMyCoursesCard :React.FC<{courses}> = ({courses}) => {
  const [courseID,setcourseID]=useState("") 


  if (courses.length === 0) {
    return <div className="text-center "> No courses</div>;
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
      return <div className="">{price} $$</div>
  
    }
    else{ 
      return(
      <div className="flex flex-row gap-2">
      <div className="line-through">{price} </div>
       <div className="">{(price) * ((100-discount)/100)}$$</div>
       </div>
      )
    
    }
  
  }

  function DiscountDuration(Course_Discount_Duration){
         return  <p className=" text-violet-400">Discount available for {Course_Discount_Duration} days</p>

  }





  return (
    <div className="grid grid-cols-2 text-white place-items-center bg-bc gap-4">

      <div className="flex gap-4 bg-black3 justify-center items-center mx-6 my-4 rounded-lg p-2 w-[84%] h-[90%]">
          <Link href="/instructor/createcourse">
          <BsPlusCircle size={100} color="white"/>
          </Link>
          </div>

      {courses?.map((course,index) => (
      <div key={index} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg p-2 ">
          {/* //div el title bel kalam */}
          <div className="flex flex-col">
            {/* //div el title bel rating */}
            <div className="flex flex-col text-3xl">
              <div className="Font-bold  text-white">{course.Course_Title}</div>
              <div className="flex flex-row  ">
                {stars(course?.Course_Rating)}
              </div>
            </div>
            {/* //div el kalam eswd */}
            <div className="bg-black3 flex flex-col  gap-3.5 my-2">
              {course?.Course_Trainee?.length} enrolled students
              <div className="text-white flex flex-row">
                Taught by
                <div className="text-black3">.</div>
                <Link href="/[{course.Course_Instructor}]">
                  {/* // 23deli el link */}
                  <div className="text-violet-400">
                    {course?.Course_Instructor?.Instructor_FirstName}
                  </div>
                </Link>
              </div>
              {/* /*div el country*/}
              <div className="flex flex-row gap-1 items-center">
                <BsGlobe2 />
                {course?.Course_Country}
              </div>
              <h1 className="text-violet-400 text-4xl font-bold ">
                {discount(course?.Course_Discount, course?.Course_Price)}
              </h1>
              {/* {DiscountDuration(course?.Course_Discount_Duration)} */}
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
              <Link href="viewmycourse">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-36" onClick={()=>{
                  setcourseID(course?.Course_ID)
                  localStorage.removeItem('CourseID')
                  localStorage.setItem('CourseID', course?.Course_ID)
                  console.log(course?.Course_ID)
                  console.log("HELLO")
                  console.log(localStorage.getItem('CourseID'))

                }}>
                  View Course
                </button>
              </Link>
              <Link href="/">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-36">
                  Discount
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorMyCoursesCard;
