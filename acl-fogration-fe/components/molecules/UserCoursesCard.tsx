import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import { useEffect, useState } from "react";



 
const UserCoursesCard:React.FC<{courses}> = ({courses}) => {
  const [isCorporate, setIsCorporate]= useState("false");


  useEffect(() => {
    setIsCorporate(localStorage.getItem("isCorp"))
  })

  const viewPrice =(price:number)=>{
    if(isCorporate == "false"){
      return  price   
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
      return <div className="">{price} $$</div>
  
    }
    else{ 

    
      return(
      // <div className="">{price} {localStorage.getItem('currency')}</div>
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
 
  return (
    <div className="grid grid-cols-2 text-white place-items-center bg-bc gap-4">
      {courses.map((course,index) => (
        <div key={index} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg p-2 ">
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
            <div className="bg-black3 flex flex-col  gap-3.5 my-2">
              {course.Course_Trainee.length} enrolled students
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
              <h1 className=" text-violet-400 text-4xl font-bold ">
              {discount(course?.Course_Discount,viewPrice(course?.Course_Price))}
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
              <Link href="viewcourse">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-36" onClick={()=>{
                  localStorage.removeItem('CourseID')
                  console.log("Gowa UserCoursesCard")
                  console.log(course)
                  localStorage.setItem('CourseID', course?.Course_ID)
                }}>
                  View Course
                </button>
              </Link>
              <Link href="/">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-36">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCoursesCard;

