import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import RequestAccess from "./RequestAccess";

 
const UserCoursesCard:React.FC<{courses}> = ({courses}) => {
  const [isCorporate, setIsCorporate]= useState("false");


  useEffect(() => {
    setIsCorporate(localStorage.getItem("isCorp"))
  })

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

    const handleClose = () => {
    setOpen(false);
  };

  const viewPrice =(price:number)=>{
    if(isCorporate == "false"){
      return price   
    }
    else{
      return 
    }
  }
const discount =(discount:number,price:number) =>{

      if (localStorage.getItem('currency') == '£'){
          price = price*20;
        }

      if (localStorage.getItem('currency') == '$'){
          price = price*1.5;
        }
    
      if(discount == 0){
      return <div className="">{price} {localStorage.getItem('currency')}</div>
  
    }
    
    else{ 

    
      return(

      <div className="flex flex-row gap-2">
      <div className="line-through">{price} </div>
       <div className="">{(price) * ((100-discount)/100)} {localStorage.getItem('currency')}</div>
       </div>
      )
    
    }
  
  }


  if (courses.length === 0) {
    return <div className="text-center text-white"> No courses</div>;
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
 
const enroll = (isCorporate:string) => {
  if (isCorporate == "false") {
    return(
    <div>
      <button
        className="bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded w-36 border border-violet-400"
        onClick={handleClickOpen}
      >
        Enroll Now
      </button>
      <RequestAccess isOpen={open} handleClose={handleClose} />
      </div>
    )
  } else {
    return (
    <div>
      <button
        className="bg-gradient-to-r from-purple to-babyblue text-white text-s  py-2 px-4 rounded w-36 border border-violet-400"
        onClick={handleClickOpen}
      >
        Request
      </button>
      <RequestAccess isOpen={open} handleClose={handleClose} />
    </div >
    
    )
  }
};

// const price = (isCorporate:string) => {
//   if (isCorporate == "false"){
//      {discount(course?.Course_Discount,viewPrice(course?.Course_Price))}
//   }

//   else{
//     return
//   }
// }

  return (
    <div className="grid grid-cols-2 text-white  bg-bc gap-4 ">
      {courses.map((course,index) => (
        <div key={index} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 ">
          {/* //div el title bel kalam */}
          <div className="flex flex-col" key={index}>
            {/* //div el title bel rating */}
            <div className="flex flex-col text-3xl">
              <div className="Font-bold  text-white">{course.Course_Title}</div>
              <div className="flex flex-row">
                {stars(course.Course_Rating)}
              </div>
            </div>
            {/* //div el kalam eswd */}
            <div className="bg-black3 flex flex-col  gap-2 my-2">
              {course.Course_Trainee.length} enrolled students
              <div className="text-white flex flex-row">
                Taught by
                <div className="text-black3">.</div>

                <div onClick={()=>{
                  localStorage.setItem("course_instructor", course?.Course_Instructor?.Instructor_ID)
                }} >
                <Link href="instructor">

                  {/* // 23deli el link */}
                  <div className="text-violet-400">
                    {course?.Course_Instructor?.Instructor_FirstName}
                  </div>
                </Link>
                </div>
              </div>
              {/* /*div el country*/}
              <div className="flex flex-row gap-1 items-center">
                <BsGlobe2 />
                {course?.Course_Country}
              </div>
              <h1 className=" text-violet-400 text-4xl  ">
              {discount(course?.Course_Discount,viewPrice(course?.Course_Price))}
              {/* {price(isCorporate)} */}
              </h1>
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
              <div>
              <Link href="viewcourse">
                {/* //link button to enroll */}
                <button className="border border-white text-white  py-2 px-4 rounded w-36" onClick={()=>{
                  localStorage.removeItem('CourseID')
                  console.log("Gowa UserCoursesCard")
                  console.log(course)
                  localStorage.setItem('CourseID', course?.Course_ID)
                }}>
                  View Course
                </button>
              </Link>
              </div>

{/* <div>
              <button 
                className="bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded w-36 border border-violet-400"
                onClick={handleClickOpen}>
                Enroll Now
              </button>
                <Payment isOpen={open} handleClose={handleClose} />
              </div> */}
              {enroll(localStorage.getItem("isCorp"))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCoursesCard;

