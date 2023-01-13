import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import FollowUp from "./FollowUp";

 
const TraineeReports:React.FC<{problems}> = ({problems}) => {
  const [isCorporate, setIsCorporate]= useState("false");


  useEffect(() => {
    setIsCorporate(localStorage.getItem("isCorp"))
  })

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
   
    setOpen(true);

  };

    const handleClose = () => {
    setOpen(false);
  };

  const viewPrice =(price:number)=>{
    if(isCorporate == "false"){
      return price   
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

      <div className="flex flex-row gap-2">
      <div className="line-through">{price} </div>
       <div className="">{(price) * ((100-discount)/100)} {localStorage.getItem('currency')}</div>
       </div>
      )
    
    }
  
  }


//   if (problems.length === 0) {
//     return <div className="text-center text-white"> No courses</div>;
//   }

 
  return (
    <div className="bg-bc h-screen">
    <div className="grid grid-cols-2 text-white  bg-bc gap-4 ">
       {problems?.map((problem,index) => ( 
            <div key={index} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4">
               <div className="flex gap-4 flex-row-1 bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 h-20">
          
          
          <div className="text-l">Course title: {problem?.Course_Title}</div>

          <div className="text-l">Type: {problem?.Problem_Type}</div>

          <div className="text-l">Status: {problem?.Problem_Status}</div>

          <div className="text-l">Report ID: {problem?.Problem_ID}</div>

          {/*<div className="text-l">Report Description: {problem?.Problem_Description}</div>*/}

          {/*<div className="text-l">Report Follow UP: {problem?.Follow_UP_Description}</div>*/}
          
          <div>
              <button 
                className="bg-gradient-to-r from-purple to-babyblue text-white py-3 px-4 rounded w-36 border border-violet-400"
                onClick={() => {localStorage.setItem("courseTitle", problem?.Course_Title),handleClickOpen()}}>
                Follow-up
              </button>
                <FollowUp isOpen={open} handleClose={handleClose} />
              </div>
        
        </div>
        </div>
     ))}
    </div>
    </div>
  );
};

export default TraineeReports;

