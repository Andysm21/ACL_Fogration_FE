import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import SolveReport from "./SolveReport";

 
const ReportRequests:React.FC<{courses}> = ({courses}) => {
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
    <div className="grid grid-cols-2 text-white  bg-bc gap-4 h-screen">
      {/* {problems.map((problem,index) => ( */}
        {/* <div key={index} className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 "> */}
        <div className="flex gap-4 flex-row-1 bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 h-20">
            <div className="text-l">Course title: {/*problems?.Course_Subject*/ "CSEN704"}</div>

          <div className="text-l">Type: {/*problems?.Problem_Type*/"Financial"}</div>

          <div className="text-l">Status: {/*problems?.Problem_Status*/"Unseen"}</div>

          <div className="text-l">Report ID: {/*problems?.Problem_ID*/"18"}</div>

          <div>
              <button 
                className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-3 px-4 rounded w-36 border border-violet-400"
                onClick={handleClickOpen}>
                Solve report
              </button>
                <SolveReport isOpen={open} handleClose={handleClose} />
              </div>
        </div>
    {/*   ))} */}
    </div>
  );
};

export default ReportRequests;

