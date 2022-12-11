import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';

const array = [];
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
  

  Instructor_Courses: [

    {
      _id: {
        $oid: "666820e1288794o098062b493e",
      },
      Course_ID: 4,
      Course_Title: "asda",
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
  User_Biography: "Hating Uni",
  User_Ratings:[5,2],
  User_Reviews:["I Loved your materials,It helped alot.Keep the great work!","Would have been better if you did more examples but other than that GREAT JOB!!"]
};

const IndividualUserProfile: React.FC<{ user }> = ({ user }) => {
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
  const average = ([]) =>{
    let avg = 0;
    for(let i = 0;i< person.User_Ratings.length ;i++){
      avg += person.User_Ratings[i];
    }
    avg = avg/(person.User_Ratings.length);
    return avg;
  };
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('DE');

  return (
    <div

      key={person.User_ID}
      className=" border-2 border-bc flex flex-col bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
            <div className="font-bold text-2xl">{person.User_FirstName} {person.User_LastName} </div>
            <div>Trainee</div>
           {/* <div> {array.push(1)}</div>
            <div className="font-light text-md">
              {array}
            </div> */}
        </div>
        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2">
          <div className="text-white font-bold text-l">Personal Information</div>
            <div className="bg-black3 rounded-md flex flex-col gap-2 " >
           <div className="text-white text-l">Username</div>
          <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l border-2 w-52  border-white rounded-md "
          defaultValue= {person.User_username}   
         /> 
           <div className="text-l"> First Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {person.User_FirstName} 
         /> 
          <div className="text-l">Last Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {person.User_LastName} 
         /> 
           <div className="text-l">Email </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {person.User_Email}
         /> 
          <div className="text-l">Gender </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {person.User_Gender}
         /> 
        <div className="text-l">Country of birth </div>
        <div className="text-black w-52">
          <CountrySelector
          id={'countries'}
          ref={myRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={val => setCountry(val)}
          selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
        /> </div>

          </div>
           <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>
          
          </div>
          
          <div className="w-1/2">
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 ">
          <div className="text-white font-bold text-l">Account Information</div>
        
          <div className="text-l">Username</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {person.User_username}  
         /> 
         <div className="text-l">Email</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {person.User_Email }  
         /> 
          <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>

        </div>


          
         <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2">
          <div className="text-white font-bold text-l">Update password</div>
        
          <div className="text-l">Old password </div>
           <input readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
          value= {person.User_Password}  
         /> 
         <div className="text-l">New password </div>
           <input type="password"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= ''  
         /> 
         <div className="text-l">Re-enter new password </div>
           <input  type="password"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= ''
         /> 


          <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>

        </div>
        
        </div>

        </div>

       {/* hena 7oty ay 7aga 3aiza tezawediha odam heya m3 kol eli fo2 zy el reviews fel instructor */}

      </div>
    </div>
  );
};

export default IndividualUserProfile;
