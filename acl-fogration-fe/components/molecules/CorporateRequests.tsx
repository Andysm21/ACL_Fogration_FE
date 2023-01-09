import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import ApproveRequest from "./ApproveRequest";
import { Requests } from "../../interfaces";
import axios from "axios";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/router";

 
const CorporateRequests:React.FC<{Requests}> = ({Requests}) => {
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


  return (
    <div className="bg-bc h-screen">
    <div className="grid grid-cols-2 text-white  bg-bc gap-4 ">
    {Requests?.map((Request,index) => (
        <div className="flex gap-4 flex-row-1 bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 h-20">
            <div className="text-l">User ID: 
            <div>{/*user?user.CorporateUser_ID*/ Request?.User_ID}
            </div></div>


          <div className="text-l">User company: 
          <div>{/*user?user.CorporateUser_Corporate*/Request?.User_Company}
          </div></div>

          <div className="text-l">Requested course: 
          <div>{/*course?course.Course_Title*/Request?.Course_Title}
            </div></div>

          <div>
              <button 
                className="bg-gradient-to-r from-purple to-babyblue text-white py-3 px-4 rounded w-36 border border-violet-400"
                onClick={()=>{
                  setOpen(true);
                  localStorage.setItem("ReqUserID",Request?.User_ID)
                  localStorage.setItem("ReqCourseTitle",Request?.Course_Title)
                  
                }}>
                Approve
              </button>
                <ApproveRequest isOpen={open} handleClose={handleClose} />
              </div>
        </div>
      ))}
    {/*   ))} */} 
    </div>
    </div>
  );
};

export default CorporateRequests;

