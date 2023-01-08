import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar ,AiOutlineStar} from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';
import axios from 'axios';



const ViewInstructor: React.FC<{ user }> = ({ user }) => {
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


  const average = () =>{
    let avg = 0;
    for(let i = 0;i< user.Instructor_Ratings?.length ;i++){
      avg += user.Instructor_Ratings[i];
    }
    avg = avg/(user.Instructor_Ratings?.length);
    return avg;
  };
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('DE');
  const [starsnum, setStarsnum] = useState(0);

  
  function handleSubmit  (x) {
    console.log(x);
    setStarsnum(x); 
    axios.post('http://localhost:8000/RatingInstructor', {ID: user.Instructor_ID, Rating: x})
  
    .then((response) => {
    }).catch((error) => console.log(error))
    //console.log(data);
  };

  return (
    <div

      key={user.Instructor_ID}
      className=" border-2 border-bc flex flex-col bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
            <div className="font-bold text-2xl">{user.Instructor_FirstName} {user.Instructor_LastName} </div>
            <div className="font-light text-md">Instructor</div>
            <div className="flex flex-row  ">{stars(average())}</div>
        </div>
         <div className="flex flex-row px-2 justify-end items-end gap-2  text-violet-400">
                <div className="text-xl text-white">Rate  </div> 
                <div onClick={() => {setStarsnum(1), handleSubmit(1);}}> { starsnum >=1 ? <AiFillStar size={30}/> : <AiOutlineStar size={30}/> }</div>
                 <div onClick={() => {setStarsnum(2), handleSubmit(2);}}> { starsnum >=2 ? <AiFillStar size={30}/> : <AiOutlineStar size={30}/> }</div>
                  <div onClick={() => {setStarsnum(3), handleSubmit(3);}}> { starsnum >=3 ? <AiFillStar size={30}/> : <AiOutlineStar size={30}/> }</div>
                  <div onClick={() => {setStarsnum(4), handleSubmit(4);}}> { starsnum >=4 ? <AiFillStar size={30}/> : <AiOutlineStar size={30}/> }</div>
                  <div onClick={() => {setStarsnum(5), handleSubmit(5);}}> { starsnum >=5 ? <AiFillStar size={30}/> : <AiOutlineStar size={30}/> }</div>
                  {/*  save the rating in the user  */}

        </div> 

        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2">
          <div className="text-white font-bold text-l">Personal Information</div>
          <div className="flex flex-row justify-between">
            <div className="bg-black3 rounded-md flex flex-col gap-2 " >
         
           <div className="text-l">Name </div>
           <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {user.Instructor_FirstName + " " + user.Instructor_LastName}</div>
         
           <div className="text-l">Email </div>
            <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {user.Instructor_Email}
        </div>
          <div className="text-l">Gender </div>
            <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {user.Instructor_Gender}
        </div>
        <div className="text-l">Country of birth </div>
         <div  className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {user.Instructor_Country}
        </div>

          </div>
          {/* biography */}
          <div className="flex flex-col gap-2">
           <div>Biography</div>
          <div  className = " bg-black3 h-52 text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
         >           {user.Instructor_Biography}
        </div>

         
          </div>
          
          
          </div>
      
          
          </div>
          
          <div className="w-1/2">
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 ">
          <div className="text-white font-bold text-l">Assigned to courses</div>
              <div className="grid grid-cols-2 gap-2">

            {user.Instructor_Courses.map((course,index) => (
              <Link href="/user/viewcourse">
                <div key={index} className="flex flex-col bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md shadow-lg">

                     
                  <div className="text-xl font-bold"> {course.Course_Title}</div>
                  <div className="flex flex-row">{stars(average())}</div>
                  <div className="text-md font-light"> {course.Course_Description}</div>
                  </div> 
                  </Link>
            ))}
          </div>
        </div>
        
        </div>

        </div>

        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">

         <div className="text-white font-bold text-l">Reviews</div>
          <div className="flex flex-row gap-2">

            {user.Instructor_Reviews.map((review,index) => (
                <div key={index} className="flex bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md w-52 shadow-lg">

                  {review}</div>    
            ))}
          </div>
  
        </div>

          
       



      </div>
    </div>
  );
};

export default ViewInstructor;
