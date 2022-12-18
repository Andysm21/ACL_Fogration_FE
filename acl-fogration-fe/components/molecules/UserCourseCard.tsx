import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill ,} from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import {AiFillFilePdf} from "react-icons/ai"
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";


const  What_You_Will_Learn= [
      "How to use React",
      "How to use Redux",
      "How to use Material UI",
    ];
 
const UserCourseCard: React.FC<{ course }> = ({ course }) => {
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
  // if (courses.length === 0) {
  //   return <div className="text-center "> No courses</div>;
  // }
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
    const [starsnum, setStarsnum] = useState(0);

  const discount =(discount:number,price:number) =>{
    if(isCorporate == "false"){
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
    else{
      return <div></div>
    }
  }

  
  function DiscountDuration(){
    if(isCorporate == "true"){
      return <div></div>
    }
    else{
         return  <p className=" text-violet-400">Discount available for {course.Course_Discount_Duration} days</p>
  
    }
  }
  
  return (
    <div
      key={course?.Course_ID}
      className=" flex flex-col bg-bc w-75% shadow-lg text-white"
    >
      {/* //div el eswd */}
      <div className="flex flex-row bg-bc justify-between mx-6 my-4">
        {/* //div el title bel kalam */}
        <div className="flex flex-col">
          {/* //div el title bel rating */}
          <div className="flex flex-col text-3xl">
            <div className="Font-bold  text-white">{course?.Course_Title}</div>
            <div className="flex flex-row  ">{stars(course?.Course_Rating)}</div>
          </div>
          {/* //div el kalam eswd */}
          <div className="bg-bc flex flex-col  gap-3 my-2">
            <div>{course?.Course_Description}</div>
            <div className="flex flex-row">
              {course.Course_Users} enrolled students, taught by{" "}
              <div className="text-bc">.</div>
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
 
          </div>
        </div>
        {/* //div el video bel se3r wel button */}
        <div className="flex flex-col justify-center ">
          {/* //div el video nafso */}
          <div>
            <Link href="https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2">
              <img src="/images/pausedvideo.png" alt="No video posted yet 😅" />
            </Link>
          </div>
          {/* //h1 el se3r */}
          <div className="flex flex-col">
          <div className="flex flex-row justify-between my-2 ">
            {/* {!isCorporate && <h1 className=" text-violet-400 text-4xl font-bold ">
              $${course.Course_Price}
            </h1> } */}
          
             <h1 className=" text-violet-400 text-4xl font-bold ">
               {discount(course?.Course_Discount,viewPrice(course?.Course_Price))} </h1>
              
            <Link href="/">
              {/* //link button to enroll */}
              <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-48">
                Enroll Now
              </button>
            </Link>

            

          </div>
           {DiscountDuration()}

          </div>
        </div>
      </div>
      {/* //div el abyad */}
      <div className="">
        {/* //what you will learn */}
        <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
          <div className="text-white font-bold text-l">What you will learn</div>
          <div className="flex flex-col gap-1">
            {/* //m7taga 23melha grid */}
            {What_You_Will_Learn.map((item,index) => {return (
              <div key={index} className="flex flex-row gap-1 text-white items-center">
                <TiTick />
                <div className="text-white">{item}</div>
              </div>
            )})}
          </div>
        </div>
      </div>
      {/*  div de m7taga tet7at ta7t */}
      {/* //This course includes  */}
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
        <div className="text-white font-bold text-l mx-2">
          This course includes
        </div>
        <div className="flex flex-row">
          {/* //course inludes content */}
          <div className="flex flex-col border-black1 text-white bg-black2 m-2 px-2 w-52 h-20 rounded-md justify-between items-center py-2">
            <BsPlayBtnFill size={30} />
            <div className="  justify-center items-end">
              {course?.Course_Hours} hours of video
            </div>
          </div>

          <div className="flex flex-col border-black1 text-white bg-black2 m-2 px-2 w-52 h-20 rounded-md justify-between items-center py-2">
            <div className="text-white">
              <TbCertificate size={40} color="white" />
            </div>
            <div className="  justify-center items-end">
              Certificate of completion
            </div>
          </div>
        </div>
      </div>
      {/* //Course content  */}
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
        <h1 className="text-white font-bold text-3xl ">Course Content</h1>
        {course?.Course_Subtitle && course?.Course_Subtitle.map((subtitle,index) => {
          return (
            <div key={index} >
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-xl font-bold">
                    {subtitle?.Subtitle_Name}
                  </div>
                  <div className="text-l flex items-end ">
                    Total Time: {subtitle?.Subtitle_Hours} mins
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-[100%] ">
                {subtitle?.Subtitle_Video?.map((video,index) => {
                  return (
                    <div key={index}>
                      <img
                        className="flex-shrink-0  "
                        src="/images/pausedvideo.png"
                        alt="No image yet 😅"
                      />

                      <div className="text-l">{video?.Video_Description}</div>
                      <div className="text-l">{video?.Video_Length} mins</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
        {/* exams of course */}
        <div className="flex flex-col bg-black3 rounded-md m-6">
          <div className=" text-white font-bold text-l mx-2">
          Course Material
        </div>
        <div className="flex flex-row p-2">
            {course?.Course_Exam && course?.Course_Exam.map((item,index) => {
              return(
              <div key={index}  className="flex flex-col items-start ">
                      <AiFillFilePdf size={100}/>
                      <div className="items-center justify-center flex flex-col">
                        <div className="text-l">Exam {item?.Exam_ID}</div>
                      <div className="text-l">{item?.Exam_Grade} %</div>
                       <div className="text-l">{item?.Exam_Question_ID?.length} Questions</div>
                      </div>
                    </div>
              )
            })}
        </div>
        </div>
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
          <div className="text-white font-bold text-l">Reviews</div>

          <div className="flex flex-row gap-2">
            {course?.Course_Review && course?.Course_Review?.map((review,index) => {return (
                <div key={index} className="flex bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md w-52">
                  {review}</div>    
            )})}
          </div>
          
        </div> 
    </div>
  );
};

export default UserCourseCard;