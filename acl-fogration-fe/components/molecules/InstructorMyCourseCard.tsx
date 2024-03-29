import { AiFillFilePdf, AiFillStar, AiOutlineFileAdd } from "react-icons/ai";
import { Link } from "@mui/material";
import { BsFillPlayBtnFill, BsGlobe2, BsPlayBtn, BsPlayBtnFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";
import AddVideo from "./AddVideo";
import {TbPlayerPlay} from "react-icons/tb"
import { course } from "../../interfaces";
import axios from "axios";
import { CountrySelector } from "./Selector";
import React from "react";
import ReportCourse from "./ReportCourse";
import { Router } from "react-router";
import { useRouter } from "next/router";
import Axios from 'axios'
import AddSubtitle from "./AddSubtitle";


const InstructorMyCourseCard: React.FC<{ course }> = ({ course }) => {
  const router = useRouter();
  const [courseID,setcourseID]=useState("") 
  var courseRate = course.Course_Rating;
  const Course_What_You_Will_Learn =["Learn new algorithms","Learn more about data structures and algorithms"]

  // if (course.length === 0) {
  //   return <div className="text-center "> No courses</div>;
  // }
  const stars = (rating: number) => {
    console.log(courseRate);
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

    useEffect(()=>{
      
    console.log(course)
  })
  const average = ()=>{
    // axios.post("http://localhost:8000/getCourseAverage",{
    //   id: course?.Course_ID}).then((response) => {
    //     setcourseRate = response.data;
    //   }).catch((error) => console.log(error))
   let avg = 0;
   try{
    for(let i =0;i<course.Course_Rating.length;i++){
      avg+= course.Course_Rating[i]
     }
     avg=avg/(course.Course_Rating.length())
   }
   finally{
    return avg;
   }
  
  }

const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

const [openAddSubtitle, setOpenAddSubtitle] = React.useState(false);
const handleClickAddSubtitle = () => {
  setOpenAddSubtitle(true);
}
const handleCloseAddSubtitle = () => {
  setOpenAddSubtitle(false);
}
  const [updatedDiscount, setUpdatedDiscount] = useState(course?.Course_Discount);
  const handleUpdatedDiscount = (event) => {
    setUpdatedDiscount(event.target.value);
  }

  const [updatedDuration, setUpdatedDuration] = useState(course?.Course_Discount_Duration);
  const handleUpdatedDuration = (event) => {
    setUpdatedDuration(event.target.value);
  };

  
const [type, setType ]= useState("");
  useEffect(()=>{
    setType(localStorage.getItem("Type"));
    localStorage.setItem("course_id", course.Course_ID);
    console.log(course)
  })

  const gotoexam = () => {
    console.log("Hello")
    console.log(localStorage.getItem("course_id"))
    axios.post("http://localhost:8000/createExam",
    {
    Instructor: Number(localStorage.getItem("user_id")),
    Course: Number(localStorage.getItem("course_id"))}
  
    ).then((response) => {
      console.log(response.data);
      localStorage.setItem("exam_id", response.data);
    }).catch((error) => console.log(error))
  }


  const addExam =()=>{
    
     if(type=="Admin"){
            return <div></div>
            }
        else{
          return <div onClick={gotoexam} className="flex flex-col p-2">
            
            <Link href="/instructor/createexam">
           <AiOutlineFileAdd size={100} className="text-white"/>
           </Link>
           <div  className="items-center justify-center flex ">
                        Add Exam
            </div>
            </div>
        }
    
 }
   const [openAddVideo, setOpenAddVideo] = React.useState(false);
    const handleClickAddVideo = () => {
    setOpenAddVideo(true);
  };
  const handleCloseAddVideo = () => {
    setOpenAddVideo(false);
  };

  const AddDiscount = () => {
    axios.post("http://localhost:8000/course_promotion",{
      courseID:Number(localStorage.getItem("CourseID")),
      discount:updatedDiscount,
      duration:updatedDuration,
    }).then((response) => {
      console.log(Number(localStorage.getItem("CourseID")))
      console.log("done")
      router.reload();
    }).catch((error) => console.log(error))
  }
  
     const discount = (discount: number, price: number, duration: number) => {
       if (Currency == "£") {
         price = price * 20;
       }

       if (Currency == "$") {
         price = price * 1.5;
       }
       if (discount == 0 || price == 0 || duration == 0) {
         return (
           <h1 className=" text-violet-400 text-4xl  ">
             {price}{Currency}
           </h1>
         );
       } else {
         return (
           <div className="flex flex-row">
             <div className=" text-violet-400 text-4xl  line-through">
               {price}
             </div>
             <div className="text-black3 text-4xl  ">.</div>
             <div className=" text-violet-400 text-4xl  ">
               {(price * (100 - discount)) / 100}{Currency}
             </div>
           </div>
         );
       }
     };
     function DiscountDuration(
       duration: number,
       discount: number,
       price: number
     ) {
       if (duration == 0 || discount == 0 || price == 0) {
         return <div></div>;
       } else
         return (
           <p className=" text-violet-400 text-light text-sm">
             Discount available for {duration} days
           </p>
         );
     }

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

  const [Currency, setCurrency] = useState('');
  
useEffect(()=>{
  Axios.post(`http://localhost:8000/viewCourse/${localStorage.getItem("Course")}`, 
  ).then((response) => {
    course=response.data
    setSavedCourseData(response.data)
  }).catch((error) => console.log(error))
  setCurrency(localStorage.getItem('currency'));
})

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
            <div className="flex flex-row  ">{stars(courseRate)}</div>
          </div>
          {/* //div el kalam eswd */}
          <div className="bg-bc flex flex-col  gap-3 my-2">
            <div>{course?.Course_Description}</div>
            <div className="flex flex-row">
              {course?.Course_Trainee} enrolled students, taught by{" "}
              <div className="text-bc">.</div>
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
          <div className="flex flex-col justify-between my-2">
            
<h1 className=" text-violet-400 text-4xl">
                {discount(
                  course?.Course_Discount,
                  course?.Course_Price,
                  course?.Course_Discount_Duration
                )}
              </h1>
            {DiscountDuration(
              course?.Course_Discount_Duration,
              course?.Course_Discount,
              course?.Course_Price
            )}

          </div>
        </div>
      </div>
      {/* //div el abyad */}
      <div className="">
        {/* //what you will learn */}
        <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
          <div className="text-white font-bold text-2xl mx-2">What you will learn</div>
          <div className="flex flex-col gap-1 mx-2">
            {/* //m7taga 23melha grid */}
            {Course_What_You_Will_Learn?.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-1 text-white items-center"
              >
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
        <div className="text-white font-bold text-2xl mx-2">
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
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-4">
        <h1 className="text-white font-bold text-2xl mx-2">Course Content</h1>
        <div onClick={handleClickAddSubtitle} className="text-white text-l bg-bc  h-24 rounded-md cursor-pointer items-center justify-center flex border border-gray-300 mx-2">Add Subtitle</div>
        <AddSubtitle isOpen={openAddSubtitle} handleClose={handleCloseAddSubtitle}  />
        {course?.Course_Subtitle?.map((subtitle,index) => {
          return (
            <div key={index}  className="bg-bc p-2 rounded-md mx-2">
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-l font-bold  ">
                    {subtitle?.Subtitle_Name}
                  </div>
                  <div className="text-l flex ">
                    Total Time: {subtitle?.Subtitle_Hours} mins
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-[100%] ">
                <div className="flex flex-col items-center justify-center">
                <BsPlayBtn size={110} className="text-white cursor-pointer" onClick={()=>{
                  console.log("HIII")
                  console.log("Length " + subtitle?.Subtitle_Video.length)
                   localStorage.setItem("subtitle_id",subtitle?.Subtitle_ID)
                   setOpenAddVideo(true);
                }} />
                <AddVideo isOpen={openAddVideo} handleClose={handleCloseAddVideo} />
                <div>Add Video</div>
                </div>
                <div className="flex flex-row gap-2">
                {subtitle?.Subtitle_Video?.map((video, index) => {
                  return (
                    <div key={index}>
                      <Link href={video?.Video_Link}>
                      <img
                        className="w-36"
                        src="/images/pausedvideo.png"
                        alt="No image yet "
                      />
                  </Link>
                      <div className="text-l">{video?.Video_Description}</div>
                      <div className="text-l">{video?.Video_Length} mins</div>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
      <div className="flex flex-row justify-between items-center">
        <div className="text-white font-bold text-2xl mx-2">Exams </div>
        </div>
         <div className="flex flex-row items-center ">
            {course?.Course_Exam && course?.Course_Exam.map((item,index) => {
              return(
              <div key={index}  className="flex flex-col ">
                      <AiFillFilePdf size={100}/>
                      <div className="items-center justify-center flex flex-col text-l">
                       Exam {item?.Exam_ID}
                      </div>
                    </div>
              )
            })}
             {addExam()}
        </div>
        
      </div>
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
        <div className="text-white font-bold text-2xl mx-2">Reviews</div>

        <div className="flex flex-row gap-2 mx-2">
          {course?.Course_Review &&
            course?.Course_Review?.map((review, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md w-52"
                >
                  {review}
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
        <div className="text-white font-bold text-2xl mx-2">Add Discount </div>
        <div className="flex flex-row justify-between rounded-md items-center">
          <div className="flex flex-row gap-3">
          <div className="flex flex-col mx-1">
            <div className=" text-l mx-1">Discount Percentage </div>
            <input
              defaultValue={course.Course_Discount}
              className=" enabled:hover:border-gray-600  border-black2 bg-black2  text-white p-2 text-l  border-2   rounded-md h-12"
              onChange={handleUpdatedDiscount}
            />
          </div>
          <div className="flex flex-col ">
            <div className="text-l mx-1">Discount Duration In Days</div>
            <input
              defaultValue={course.Course_Discount_Duration}
              className="enabled:hover:border-gray-600  border-black2 bg-black2  text-white p-2 text-l  border-2   rounded-md h-12"
              onChange={handleUpdatedDuration}
            />
          </div>
          </div>
          <button onClick={AddDiscount} className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded w-72 h-12 border border-violet-400">
            Add discount</button>
        </div>
      </div>
                              <div className= "rounded-md m-6 flex flex-col justify-center w-96 gap-1">

 
            <button className=""
            onClick={handleClickOpen2}>
                <div className="bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded w-[100%] border border-violet-400">Report an issue</div>

            </button>
            <ReportCourse isOpen={open2} handleClose={handleClose2} />
</div>
    </div>
  );
};

export default InstructorMyCourseCard;