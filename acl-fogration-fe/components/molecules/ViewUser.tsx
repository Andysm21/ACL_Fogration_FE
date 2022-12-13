import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar ,AiOutlineStar} from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useEffect, useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';

const person = {
  _id: {
    $oid: "636880e12886948f062b493e",
  },
 User_ID: 4,
  User_username: "Pasha",
  User_Email: "Pasha@gmail.com",
  User_Password: "1234",
  User_FirstName:"Hana",
  User_LastName:"Pasha",
  User_Gender:"Female",
  User_Country: "Egypt",
  User_Corporate:"Benya",
  

 User_Courses: [

    {
      _id: {
        $oid: "666820e1288794o098062b493e",
      },
      Course_ID: 4,
      Course_Title: "Computer Science",
      Course_Subject: "Computer Science",
      Course_Description: "Data Structures and Algorithms",
      Course_Price: 0,
      Course_Rating: 5,
      Course_Instructor: "Malak",
      Course_Hours: 5,
      Course_Country: "Egypt",
      Course_Discount: 10,
      Course_Discount_Duration: 5,
      Course_Subtitle: [
        {
          Subtitle_ID: 1,
          Subtitle_Name: "S1",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
        {
          Subtitle_ID: 2,
          Subtitle_Name: "S2",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
      ],
      Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
      Course_Review: ["Very Good Course"],
      Course_Rate: [1,2,3],
      Course_Exam: [
        { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
      ],
    },
    {
      _id: {
        $oid: "666820e1288794o098062b493e",
      },
      Course_ID: 4,
      Course_Title: "Computer Science",
      Course_Subject: "Computer Science",
      Course_Description: "Data Structures and Algorithms",
      Course_Price: 0,
      Course_Rating: 5,
      Course_Instructor: "Malak",
      Course_Hours: 5,
      Course_Country: "Egypt",
      Course_Discount: 10,
      Course_Discount_Duration: 5,
      Course_Subtitle: [
        {
          Subtitle_ID: 1,
          Subtitle_Name: "S1",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
        {
          Subtitle_ID: 2,
          Subtitle_Name: "S2",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
      ],
      Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
      Course_Review: ["Very Good Course"],
      Course_Rate: ["zeft"],
      Course_Exam: [
        { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
      ],
    },
    {
      _id: {
        $oid: "666820e1288794o098062b493e",
      },
      Course_ID: 3,
      Course_Title: "Computer Engineering",
      Course_Subject: "Computer Science",
      Course_Description: "Data Structures and Algorithms",
      Course_Price: 0,
      Course_Rating: 5,
      Course_Instructor: "Malak",
      Course_Hours: 5,
      Course_Country: "Egypt",
      Course_Discount: 10,
      Course_Discount_Duration: 5,
      Course_Subtitle: [
        {
          Subtitle_ID: 1,
          Subtitle_Name: "S1",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
        {
          Subtitle_ID: 2,
          Subtitle_Name: "S2",
          Subtitle_Course_ID: "1",
          Subtitle_Video: [
            {
              Video_ID: 1,
              Video_Link:
                "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
              Video_Subtitle: "S1",
              Video_Description: "Introduction",
              Video_Length: 10,
            },
          ],
          Subtitle_Hours: "10",
        },
      ],
      Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
      Course_Review: ["Very Good Course"],
      Course_Rate: ["zeft"],
      Course_Exam: [
        { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
      ],
    },
  ],

};

const ViewUser: React.FC<{ user }> = ({ user }) => {
    
    const average = (x) =>{
    let avg = 0;
    for(let i = 0;i< x.length ;i++){
      avg += x[i];
    }
    avg = avg/(x.length);
    return avg;
  };
  const stars = (rating: number) => {
    let stars = [];
    if(stars.length === 0){
        return ""
    }
    else{
    for (let i = 0; i < rating; i++) {
      stars.push(
        <div>
          <AiFillStar />
        </div>
      );
    
    return stars;
  };
};
};
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('DE');
  const [starsnum, setStarsnum] = useState(0);
  const [type, setType ]= useState("");

  useEffect(()=>{
    //localStorage.removeItem("Type")
    localStorage.setItem("Type","CorporateUser")
    setType(localStorage.getItem("Type"));
   
  })
 const isCorp =()=>{
     console.log(type)
     if(type=="IndividualUser"){
            return <div className="font-light text-md">Trainee</div>
            }
        else{
            return <div className="font-light text-md">Trainee in {person.User_Corporate}</div>
        }
    
 }

  return (
    <div

      key={person.User_ID}
      className=" border-2 border-bc flex flex-col h-screen bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
            <div className="font-bold text-2xl">{person.User_FirstName} {person.User_LastName} </div>
            
            <div className="font-light text-md">{isCorp()}</div>

        </div>


        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2">
          <div className="text-white font-bold text-l">Personal Information</div>
          <div className="flex flex-row justify-between">
            <div className="bg-black3 rounded-md flex flex-col gap-2 " >
         
           <div className="text-l">Name </div>
           <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {person.User_FirstName + " " + person.User_LastName}</div>
         
           <div className="text-l">Email </div>
            <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {person.User_Email}
        </div>
          <div className="text-l">Gender </div>
            <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {person.User_Gender}
        </div>
        <div className="text-l">Country of birth </div>
         <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {person.User_Country}
        </div>
          </div>    
          </div>    
          </div>
          
          <div className="w-1/2">
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 ">
          <div className="text-white font-bold text-l">Enrolled in</div>
              <div className="grid grid-cols-2 gap-2">
            {person.User_Courses.map((course,index) => (
              <Link href="/[course._id]" key={index}>
                <div  className="flex flex-col bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md shadow-lg">
                     
                  <div className="text-xl font-bold"> {course.Course_Title}</div>
                  <div className="flex flex-row">{stars(average(course.Course_Rate))}</div>
                  <div className="text-md font-light"> {course.Course_Description}</div>
                  </div> 
                  </Link>
            ))}
          </div>
        </div>
        
        </div>

        </div>

      </div>
    </div>
  );
};

export default ViewUser;
