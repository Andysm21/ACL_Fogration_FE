import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { instructor } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';


// const instructor = {
//   _id: {
//     $oid: "636880e12886948f062b493e",
//   },
//  Instructor_ID: 4,
//   Instructor_username: "Pasha",
//   Instructor_Email: "Pasha@gmail.com",
//   Instructor_Password: "1234",
//   Instructor_FirstName:"Hana",
//   Instructor_LastName:"Pasha",
//   Instructor_Gender:"Female",
//   Instructor_Country: "Egypt",
  

//   Instructor_Courses: [

//     {
//       _id: {
//         $oid: "666820e1288794o098062b493e",
//       },
//       Course_ID: 4,
//       Course_Title: "asda",
//       Course_Subject: "Computer Science",
//       Course_Description: "Data Structures and Algorithms",
//       Course_Price: 0,
//       Course_Rating: 5,
//       Course_Instructor: "Malak",
//       Course_Hours: 5,
//       Course_Country: "Egypt",
//       Course_Discount: 10,
//       Course_Discount_Duration: 5,
//       Course_Subtitle: [
//         {
//           Subtitle_ID: 1,
//           Subtitle_Name: "S1",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//         {
//           Subtitle_ID: 2,
//           Subtitle_Name: "S2",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//       ],
//       Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
//       Course_Review: ["Very Good Course"],
//       Course_Rate: ["zeft"],
//       Course_Exam: [
//         { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
//       ],
//     },
//   ],
//   Instructor_Biography: "Hating Uni",
//   Instructor_Ratings:[5,2],
//   Instructor_Reviews:["I Loved your materials,It helped alot.Keep the great work!","Would have been better if you did more examples but other than that GREAT JOB!!"]
// };

const InstructorProfile: React.FC<{ instructor }> = ({ instructor }) => {
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
    for(let i = 0;i< instructor.Instructor_Ratings.length ;i++){
      avg += instructor.Instructor_Ratings[i];
    }
    avg = avg/(instructor.Instructor_Ratings.length);
    return avg;
  };
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('DE');
  return (
    <div

      key={instructor.Instructor_ID}
      className=" border-2 border-bc flex flex-col bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
            <div className="font-bold text-2xl">{instructor.Instructor_FirstName} {instructor.Instructor_LastName} </div>
            <div className="font-light text-md">Instructor</div>
            {/* <div className="flex flex-row  ">{stars(average(instructor.Instructor_Ratings))}</div> */}
        </div>
        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2">
          <div className="text-white font-bold text-l">instructoral Information</div>
          <div className="flex flex-row justify-between">
            <div className="bg-black3 rounded-md flex flex-col gap-2 " >
           <div className="text-white text-l">Username</div>
          <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l border-2 w-52  border-white rounded-md "
          defaultValue= {instructor.Instructor_username}   
         /> 
           <div className="text-l"> First Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {instructor.Instructor_FirstName} 
         /> 
          <div className="text-l">Last Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {instructor.Instructor_LastName} 
         /> 
           <div className="text-l">Email </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {instructor.Instructor_Email}
         /> 
          <div className="text-l">Gender </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {instructor.Instructor_Gender}
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
          {/* biography */}
          <div className="flex flex-col gap-2">
           <div>Biography</div>
           <input type="text"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52 h-72  border-white rounded-md"
          defaultValue= {instructor.Instructor_Biography}
         /> 
          {/* <TextField
                    required
                    id="outlined-basic"
                   
                    variant="outlined"
                    defaultValue={instructor.Instructor_Biography}
                  /> */}
         
          </div>
          
          
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
          defaultValue= {instructor.Instructor_username}  
         /> 
         <div className="text-l">Email</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {instructor.Instructor_Email }  
         /> 
          <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>

        </div>


          
         <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2">
          <div className="text-white font-bold text-l">Update password</div>
        
          <div className="text-l">Old password </div>
           <input readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
          value= {instructor.Instructor_Password}  
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

        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
          <div className="text-white font-bold text-l">Reviews</div>

          <div className="flex flex-row gap-2">
            {instructor.Instructor_Reviews?.map((review,index) => (
                <div key={index} className="flex bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md w-52">
                  {review}</div>    
            ))}
          </div>
          
        </div>     

      </div>
    </div>
  );
};

export default InstructorProfile;
