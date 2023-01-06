import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill, BsPlusCircle } from "react-icons/bs";
import React from "react";
import AddAdmin from "../molecules/AddAdmin";
import AddInstructor from "../molecules/AddInstructor";
import AddTrainee from "../molecules/AddTrainee";



const UsersAdditions = () => {
const [open, setOpen] = React.useState(false);
const [open2, setOpen2] = React.useState(false);
const [open3, setOpen3] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClickOpen2 = () => {
  setOpen2(true);
};

const handleClickOpen3 = () => {
  setOpen3(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleClose2 = () => {
  setOpen2(false);
};

const handleClose3 = () => {
  setOpen3(false);
};
  return (
    <div className="grid grid-cols-3 text-white  bg-bc gap-4">

    {/* <div className="bg-black3 flex justify-center items-center mx-6 my-4 rounded-lg h-full">
          Add Admin
          </div>
          <div className="bg-black3 flex justify-center items-center mx-6 my-4 rounded-lg h-full">
          Add Instructor
          </div>
          <div className="bg-black3 flex justify-center items-center mx-6 my-4 rounded-lg h-full">
          Add Trainee
          </div>
      <div className="flex gap-4 bg-black3 justify-center items-center mx-6 my-4 rounded-lg py-3 px-4">
          
          <BsPlusCircle 
          size={100} 
          color="white"
          onClick={handleClickOpen}/>
        <AddAdmin isOpen={open} handleClose={handleClose} />
          </div>


      <div className="flex gap-4 bg-black3 justify-center items-center mx-6 my-4 rounded-lg py-3 px-4">
          
          <BsPlusCircle 
          size={100} 
          color="white"
          onClick={handleClickOpen2}/>
        <AddInstructor isOpen={open2} handleClose={handleClose2} />
          </div>
        
              <div className="flex gap-4 bg-black3 justify-center items-center mx-6 my-4 rounded-lg py-3 px-4">
          <BsPlusCircle 
          size={100} 
          color="white"
          onClick={handleClickOpen3}/>
        <AddTrainee isOpen={open3} handleClose={handleClose3} />
          </div> */}

      

    </div>
  );
};

export default UsersAdditions;
