import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";
import Axios from 'axios'


const Course_What_You_Will_Learn =[
  "Learn how to use the most popular data structures",
  "Learn how to use the most popular algorithms",
  "Learn about new algorithms"]

const GuestCourseCard: React.FC<{ course }> = ({ course }) => {
 // console.log(course);
  // if (courses.length === 0) {
  //   return <div className="text-center ">No courses</div>;
  // }
    var [SavedCourseData,setSavedCourseData]=useState({
      Course_ID: NaN,
      Course_Subject: '',
      Course_Description: '',
      Course_Price: NaN,
      Course_Rating: NaN,
      Course_Instructor: {
        Instructor_FirstName: '',
      },
      Course_Hours: NaN,
      Course_Country: '',
      Course_Discount: NaN,
      Course_Title: '',
      Course_Discount_Duration: NaN,
      Course_Subtitle: [],
      Course_Trainee: [],
      Course_Review: [],
      Course_Rate: [''],
      Course_Exam: [''],
      Course_What_You_Will_Learn: [],    })
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
  }
useEffect(()=>{
  Axios.post(`http://localhost:8000/viewCourse/${localStorage.getItem("Course")}`, 
  ).then((response) => {
    course=response.data
    setSavedCourseData(response.data)
  }).catch((error) => console.log(error))

})
  return (
    <div key={SavedCourseData?.Course_ID} className=" flex flex-col bg-bc w-75% shadow-lg text-white">
      {/* //div el eswd */}
      <div className="flex flex-row bg-bc justify-between mx-6 my-4">
        {/* //div el title bel kalam */}
        <div className="flex flex-col">
          {/* //div el title bel rating */}
          <div className="flex flex-col text-3xl">
            <div className="Font-bold  text-white">{SavedCourseData?.Course_Title}</div>
            <div className="flex flex-row  ">{stars(SavedCourseData?.Course_Rating)}</div>
          </div>
          {/* //div el kalam eswd */}
          <div className="bg-bc flex flex-col  gap-3 my-2">
            <div>{SavedCourseData?.Course_Description}</div>
            <div className="flex flex-row">
              {SavedCourseData?.Course_Trainee} enrolled students, taught by{" "}
              <div className="text-bc">.</div>
              <Link href="/{SavedCourseData?.Course_Instructor?.Instructor_FirstName}">
                {/* // 23deli el link */}
                <div className="text-violet-400">
                  {SavedCourseData?.Course_Instructor?.Instructor_FirstName}
                </div>
              </Link>
            </div>

            {/* /*div el country*/}
            <div className="flex flex-row gap-1 items-center">
              <BsGlobe2 />
              {SavedCourseData?.Course_Country}
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
          <div className="flex flex-row justify-between my-2">
            {/* <h1 className=" text-violet-400 text-4xl font-bold ">
              $${SavedCourseData?.Course_Price}
            </h1> */}
            {discount(SavedCourseData?.Course_Discount, SavedCourseData?.Course_Price)}


            <Link href="/guest/signup">
              {/* //link button to enroll */}
              <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-48">
                Enroll Now
              </button>
            </Link>
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
            {Course_What_You_Will_Learn?.map((item,index) => (
              <div className="flex flex-row gap-1 text-white items-center" key={index}>
                <TiTick />
                <div className="text-white">{item}</div>
              </div>
            ))}
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
              {SavedCourseData?.Course_Hours} hours of video
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
        {SavedCourseData?.Course_Subtitle?.map((subtitle) => {
          return (
            <div>
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-xl font-bold">
                    {subtitle.Subtitle_Name}
                  </div>
                  <div className="text-l flex items-end ">
                    Total Time: {subtitle.Subtitle_Hours} mins
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-[100%] ">
                {subtitle.Subtitle_Video.map((video) => {
                  return (
                    <div>
                      <img
                        className="flex-shrink-0  "
                        src="/images/pausedvideo.png"
                        alt="No image yet 😅"
                      />

                      <div className="text-l">{video.Video_Description}</div>
                      <div className="text-l">{video.Video_Length} mins</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestCourseCard;
