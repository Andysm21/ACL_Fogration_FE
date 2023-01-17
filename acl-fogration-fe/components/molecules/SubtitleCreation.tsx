import React, { useState } from 'react'
import  Link  from 'next/link';
import {AiOutlineArrowRight, AiOutlinePlus} from 'react-icons/ai' 
import axios from 'axios';
import router from 'next/router';
import { List, ListItem } from '@mui/material';
import { BsPlusCircle, BsPlusSquare } from 'react-icons/bs';


const CourseCreation = () => {
   


  const createSub = () =>{
 
        axios.post("http://localhost:8000/createSubtitle",{
          Subtitle_Course_ID:Number(localStorage.getItem("CourseID")),
          Subtitle:subtitleName
          }).then((response) => {
          console.log(response.data)
          console.log("done")
        }).catch((error) => console.log(error))
  }

  
   
   
    
    // add subtitle 
     const [subtitleNumber, setSubtitleNumber] = useState(1);
     const handleSubtitleNumber = (event) => {
       setSubtitleNumber(event.target.value);
       // console.log(questionName)
    };  
     const [subtitleName, setSubtitleName] = useState("");
     const handleSubtitleName = (event) => {
       setSubtitleName(event.target.value);
       // console.log(questionName)
    }; 
     const [videoNumber, setVideoNumber] = useState(1);
     const handleVideoNumber = (event) => {
       setVideoNumber(event.target.value);
       // console.log(questionName)
    }; 
    const [videoTitle, setVideoTitle] = useState("");
     const handleVideoTitle = (event) => {
       setVideoTitle(event.target.value);
       // console.log(questionName)
    }; 
     const [videoLink, setVideoLink] = useState("");
     const handleVideoLink = (event) => {
       setVideoLink(event.target.value);
       // console.log(questionName)
    }; 
     const [videoDescription, setVideoDescription] = useState("");
     const handleVideoDescription = (event) => {
       setVideoDescription(event.target.value);
       // console.log(questionName)
    }; 


   
    
    
  return (
    <div className=" p-2 m-2 rounded-lg flex flex-row  justify-between">
     
      
      <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3 justify-between">
        <div className="mx-2 text-l">Subtitle Number</div>
        <input
          value={subtitleNumber}
          disabled
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          
        />
        <div className="mx-2 text-l">Subtitle Name</div>
        <input
          placeholder="Introduction"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleSubtitleName}
        />
        <div className="flex flex-col  ">
          <div className="flex flex-row justify-center">
      
            <Link href="/instructor/viewmycourse">
            <button
              className="mx-2 my-2 border border-violet-400 justify-center bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72"
              onClick={createSub}
            >
              Create subtitle
            </button>
            </Link>
          </div>

       
        </div>
      </div>
      <div className="bg-bc p-2 m-2 rounded-lg ">
       <List >
           <ListItem> A Course consists of subtitles.</ListItem>
           <ListItem> Each subtitle has a name.</ListItem>
          <ListItem>  Each subtitle has videos.</ListItem>
           <ListItem> Each video has a title, a Link, and a description.</ListItem>
          <ListItem>  You can add as many subtitles and videos as you want.</ListItem>
        </List>
 
        
        </div>
    </div>
  );
};

export default CourseCreation;