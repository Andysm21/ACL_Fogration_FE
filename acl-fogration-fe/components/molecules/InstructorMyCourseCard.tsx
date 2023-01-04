import { AiFillFilePdf, AiFillStar, AiOutlineFileAdd } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill, BsPlusCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";
import { course } from "../../interfaces";
import axios from "axios";
import { CountrySelector } from "./Selector";

const InstructorMyCourseCard: React.FC<{ course }> = ({ course }) => {
  const [courseID,setcourseID]=useState("") 
  var courseRate = course.Course_Rating;
  const Course_What_You_Will_Learn =["Learn new algorithms","Learn more  abour data structures and algorithms"]

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
    console.log(course)
  })

  const addExam =()=>{
    
     if(type=="Admin"){
            return <div></div>
            }
        else{
          return <div className="flex flex-col p-2">
            <Link href="/instructor/createexam">
           <AiOutlineFileAdd size={100} className="text-white"/>
           </Link>
            <div className="items-center justify-center flex ">
                        Add Exam
            </div>
            </div>
        }
    
 }
  const AddDiscount = () => {

    console.log(updatedDiscount);
    console.log(updatedDuration);
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
            <div className="flex flex-row  ">{stars(courseRate)}</div>
          </div>
          {/* //div el kalam eswd */}
          <div className="bg-bc flex flex-col  gap-3 my-2">
            <div>{course?.Course_Description}</div>
            <div className="flex flex-row">
              {course?.Course_Trainee?.length} enrolled students, taught by{" "}
              <div className="text-bc">.</div>
              <Link href="/[{course?.Course_Instructor}]">
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
            <h1 className=" text-violet-400 text-4xl font-bold ">
              {discount(course?.Course_Discount, course?.Course_Price)}
            </h1>
            {DiscountDuration(course?.Course_Discount_Duration)}
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
        <h1 className="text-white font-bold text-l ">Course Content</h1>
        {course?.Course_Subtitle?.map((subtitle, index) => {
          return (
            <div key={index}>
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
                {subtitle?.Subtitle_Video?.map((video, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="flex-shrink-0 w-36 "
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
        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
      <div className="flex flex-row justify-between items-center">
        <div className="text-white font-bold text-l">Exams </div>
       
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
        <div className="text-white font-bold text-l">Reviews</div>

        <div className="flex flex-row gap-2">
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
        <div className="text-white font-bold text-l">Add Discount </div>
        <div className="flex flex-row justify-between rounded-md items-center">
          <div className="flex flex-row gap-3">
          <div className="flex flex-col ">
            <div className=" text-l">Discount Percentage </div>
            <input
              defaultValue={course.Course_Discount}
              className=" enabled:hover:border-gray-600  border-black2 bg-black2  text-white p-2 text-l  border-2   rounded-md h-12"
              onChange={handleUpdatedDiscount}
            />
          </div>
          <div className="flex flex-col ">
            <div className="text-l">Discount Duration In Days</div>
            <input
              defaultValue={course.Course_Discount_Duration}
              className="enabled:hover:border-gray-600  border-black2 bg-black2  text-white p-2 text-l  border-2   rounded-md h-12"
              onChange={handleUpdatedDuration}
            />
          </div>
          </div>
          <button onClick={AddDiscount} className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72 h-12 ">
            Add Discount</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorMyCourseCard;