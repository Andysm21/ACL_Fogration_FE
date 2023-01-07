import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill, BsPlusCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

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
const [factor, setFactor] = useState(1);
const [curr, setCurr] = useState('€');

  useEffect(()=>{
  
    console.log(localStorage.getItem('currency'));
    if (localStorage.getItem('currency') == '£'){
          setFactor(factor*2);
          setCurr('£');
        }

      if (localStorage.getItem('currency') == '$'){
          setFactor(factor*1.5);
          setCurr('$');
        }
        

  })
  
   const discount =(discount:number,price:number) =>{

     
    
        if((discount == 0) || price == 0){
      return <h1 className=" text-violet-400 text-4xl font-bold ">
                {price*factor} {curr}
              </h1>

    }
    else{ 
      
      return(
      <div className="flex flex-row">
      <div className=" text-violet-400 text-4xl font-bold line-through">{price}</div>
      <div className="text-black3 text-4xl font-bold ">.</div>
      <div className=" text-violet-400 text-4xl font-bold ">
                    {price *factor* (100-discount)/100} {curr}</div>
      </div>
      )
    }
    }

      function DiscountDuration(duration : number,discount : number ,price : number){
      if(duration == 0 || discount == 0 || price == 0){
        return <div></div>
      }
        else{
         return  <p className=" text-violet-400 text-light text-sm">Discount available for {duration} days</p>
    }
  }





  return (
    <div className="grid grid-cols-2 text-white  bg-bc gap-4">

      <div className="flex gap-4 bg-black3 justify-center items-center mx-6 my-4 rounded-lg py-3 px-4">
          <Link href="/instructor/createcourse">
          <BsPlusCircle size={100} color="white"/>
          </Link>
          </div>

      {courses?.map((course,index) => (
        <div key={index} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 ">
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
            <div className="bg-black3 flex flex-col  gap-2 my-2">
              {course?.Course_Trainee?.length} enrolled students
              <div className="text-white flex flex-row">
                Taught by
                <div className="text-black3">.</div>
                <Link href="/user/instructor">
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
              {DiscountDuration(course?.Course_Discount_Duration, course?.Course_Discount, course?.Course_Price)}
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
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-80" onClick={()=>{
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

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorMyCoursesCard;
