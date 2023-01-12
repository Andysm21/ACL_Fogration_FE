import React, { useState } from 'react'
import  Link  from 'next/link';
import {AiOutlineArrowRight, AiOutlinePlus} from 'react-icons/ai' 
import axios from 'axios';
import router from 'next/router';
import { List, ListItem } from '@mui/material';
import { BsPlusCircle, BsPlusSquare } from 'react-icons/bs';


const CourseCreation = () => {
    const addVideo = () => {
     localStorage.setItem("video" +  "Number", `${videoNumber}`);
     localStorage.setItem("video" + videoNumber + "Link", videoLink);
     localStorage.setItem("video" + videoNumber + "Description", videoDescription); 
    
    console.log("video" +  "Number", localStorage.getItem("video" +  "Number"));
    console.log("video" + videoNumber + "Link", localStorage.getItem("video" + videoNumber + "Link",));
    console.log("video" + videoNumber + "Description", localStorage.getItem("video" + videoNumber + "Description",));

        setVideoNumber(videoNumber + 1);
        setVideoLink("");
        setVideoDescription("");    

     }
  const addSubtitle = () => {
    localStorage.setItem("subtitle" +  "Number", `${subtitleNumber}`);
    localStorage.setItem("subtitle" + subtitleNumber + "Name", subtitleName);
   
    console.log(
      "subtitle" + "Number",
      localStorage.getItem("subtitle" + "Number")
    );
    console.log(
      "subtitle" + subtitleNumber + "Name",
      localStorage.getItem("subtitle" + subtitleNumber + "Name")
    );
     setSubtitleName("");
      setSubtitleNumber(subtitleNumber + 1);
      
      setVideoNumber(1);
      setVideoLink("");
      setVideoDescription("");
    console.log(subtitleNumber);

  };

  const createSub = () =>{
  localStorage.setItem("subtitle" + "Number", `${subtitleNumber}`);
        localStorage.setItem("subtitle" + subtitleNumber + "Name", subtitleName);
        // localStorage.setItem("video" +  "Number", `${videoNumber}`);
        // localStorage.setItem("video" + videoNumber + "Title", videoTitle);
        // localStorage.setItem("video" + videoNumber + "Link", videoLink);
        // localStorage.setItem("video" + videoNumber + "Description", videoDescription); 
        axios.post("http://localhost:8000/createSubtitle",{
          Subtitle_Course_ID:Number(localStorage.getItem("CourseID")),
          Subtitle:subtitleName
          }).then((response) => {
          console.log(response.data)
          console.log("done")
        }).catch((error) => console.log(error))
      //    console.log(
      //     "subtitle" +  "Number",
      //     localStorage.getItem("subtitle" + "Number")
      //   );
      //   console.log(
      //     "subtitle" + subtitleNumber + "Name",
      //     localStorage.getItem("subtitle" + subtitleNumber + "Name")
      //   );
      //  console.log(
      //    "video" +  "Number",
      //    localStorage.getItem("video" +  "Number")
      //  );
      //  console.log(
      //       "video" + videoNumber + "Title",
      //       localStorage.getItem("video" + videoNumber + "Title")
      //       );
      //  console.log(
      //    "video" + videoNumber + "Link",
      //    localStorage.getItem("video" + videoNumber + "Link")
      //  );
      //  console.log(
      //    "video" + videoNumber + "Description",
      //    localStorage.getItem("video" + videoNumber + "Description")
      //  );
        
      //   // setCourseID(1);
      //   setVideoNumber(1);
      //   setSubtitleNumber(1);

  }

  
    const gotoexam = () => {
        // localStorage.setItem("course" +  "ID", `${courseID}`);
        // localStorage.setItem("courseTitle", courseTitle);
        // localStorage.setItem("courseSubject", courseSubject);
        // localStorage.setItem("courseDescription", courseDescription);
        // localStorage.setItem("coursePrice", coursePrice);
        // localStorage.setItem("courseCountry", courseCountry);
        // localStorage.setItem("coursePreviewVideo", coursePreviewVideo);
        localStorage.setItem("subtitle" + "Number", `${subtitleNumber}`);
        localStorage.setItem("subtitle" + subtitleNumber + "Name", subtitleName);
        // localStorage.setItem("video" +  "Number", `${videoNumber}`);
        // localStorage.setItem("video" + videoNumber + "Title", videoTitle);
        // localStorage.setItem("video" + videoNumber + "Link", videoLink);
        // localStorage.setItem("video" + videoNumber + "Description", videoDescription); 

        // console.log(
        //   "course" + "ID",
        //   localStorage.getItem("course" + "ID")
        // );
        // console.log(
        //   "courseTitle",
        //   localStorage.getItem("course" + courseTitle + "Title")
        // );
        // console.log(
        //   "courseSubject",
        //   localStorage.getItem("course" + courseSubject + "Subject")
        // );
        //  console.log(
        //    "courseDescription",
        //    localStorage.getItem("course" + courseDescription + "Description")
        //  );
        //  console.log(
        //    "coursePrice",
        //    localStorage.getItem("course" + coursePrice + "Price")
        //  );
        //  console.log(
        //    "courseCountry",
        //    localStorage.getItem("course" + courseCountry + "Country")
        //  );
        //  console.log(
        //    "coursePreviewVideo",
        //    localStorage.getItem("course" + coursePreviewVideo + "PreviewVideo")
        //  );
      //   console.log(
      //     "subtitle" +  "Number",
      //     localStorage.getItem("subtitle" + "Number")
      //   );
      //   console.log(
      //     "subtitle" + subtitleNumber + "Name",
      //     localStorage.getItem("subtitle" + subtitleNumber + "Name")
      //   );
      //  console.log(
      //    "video" +  "Number",
      //    localStorage.getItem("video" +  "Number")
      //  );
      //  console.log(
      //       "video" + videoNumber + "Title",
      //       localStorage.getItem("video" + videoNumber + "Title")
      //       );
      //  console.log(
      //    "video" + videoNumber + "Link",
      //    localStorage.getItem("video" + videoNumber + "Link")
      //  );
      //  console.log(
      //    "video" + videoNumber + "Description",
      //    localStorage.getItem("video" + videoNumber + "Description")
      //  );
        
      //   // setCourseID(1);
      //   setVideoNumber(1);
      //   setSubtitleNumber(1);

    }
    // const [i, setI] = useState(1);
    
  //   const [courseID, setCourseID] = useState(1);
  //   const handleCourseID = (event) => {
  //    setCourseID(event.target.value);
  //    // console.log(questionName)
  //  };

  
//   const [courseTitle, setCourseTitle] = useState("");
//   const handleCourseTitle = (event) => {
//     setCourseTitle(event.target.value);
//     // console.log(questionName)
//   };
    
//   const [courseSubject, setCourseSubject] = useState("");
//   const handleCourseSubject = (event) => {
//     setCourseSubject(event.target.value);
//     // console.log(questionName)
//   };
//   const [courseDescription, setCourseDescription] = useState("");
//   const handleCourseDescription = (event) => {
//     setCourseDescription(event.target.value);
//     // console.log(questionName)
//   };
//   const [coursePrice, setCoursePrice] = useState("");
//   const handleCoursePrice = (event) => {
//     setCoursePrice(event.target.value);
//     // console.log(questionName)
//   };
//   const [courseCountry, setCourseCountry] = useState("");
//   const handleCourseCountry = (event) => {
//     setCourseCountry(event.target.value);
//     // console.log(questionName)
//   };
    
//    const [coursePreviewVideo, setCoursePreviewVideo] = useState("");
//    const handleCoursePreviewVideo = (event) => {
//      setCoursePreviewVideo(event.target.value);
//      // console.log(questionName)
//    };  
    
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
    // let  courseCreated = false;
    // const createCourseButton = () =>{
    //   if(courseCreated){
    //     {console.log(courseCreated)}
    //     return <button className="mx-2 my-2 bg-gray-500 text-white font-bold py-2 px-4 rounded" >Create Course</button>
    //   }
    //   else{
    //     return  <button
    //           className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
    //           onClick={createCourse}
    //         >
    //          Create course
    //         </button>
    //   }
    // }

    // const createCourse = () => {
    // courseCreated = true;
    // createCourseButton();
    // router.reload();
    // }
    
    
  return (
    <div className=" p-2 m-2 rounded-lg flex flex-row  justify-between">
      {/* <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3"> */}
        {/* <div className="text-l mx-2"> Course ID </div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleCourseID}
        /> */}
        {/* <div className="m-2 text-l">Title </div>
        <input
          placeholder="Fogration"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseTitle}
        />
        <div className="mx-2 text-l">Subject</div>
        <input
          placeholder="CSEN"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseSubject}
        />
        <div className="mx-2 text-l">Description</div>
        <textarea
          placeholder='This is a course about.....'
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseDescription}
        />
        <div className="mx-2 text-l">Price</div>
        <input
         placeholder="$$"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCoursePrice}
        />
        <div className="mx-2 text-l">Country</div>
        <input
          placeholder="Egypt"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseCountry}
        />
        <div className="mx-2 text-l">Preview Video</div>
        <input
         placeholder="https://www.youtube.com/watch?v=xxxxxxxxxxx"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleCoursePreviewVideo}
        /> */}
        {/* <button
              className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
              onClick={createCourse}
            >
             Create course
            </button> */}
            
            {/* {createCourseButton()}
      </div> */}
      
      <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3 justify-between">
        {/* <div className="mx-2 text-l">Subtitle Number</div>
        <input
          value={subtitleNumber}
          disabled
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onClick={handleSubtitleNumber}
        /> */}
        <div className="mx-2 text-l">Subtitle Name</div>
        <input
          placeholder="Introduction"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleSubtitleName}
        />
        <div className="flex flex-col  ">
          <div className="flex flex-row justify-center">
            {/* <button
              className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72"
              onClick={addVideo}
            >
              Add video
            </button> */}
            <Link href="/instructor/viewmycourse">
            <button
              className="mx-2 my-2  justify-center bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72"
              onClick={createSub}
            >
              Create subtitle
            </button>
            </Link>
          </div>

         
           
            {/* <div className="flex  justify-end  items-center flex-row gap-2 cursor-pointer">
                <BsPlusSquare className="text-gray-400" size={20} />
              <div onClick={addSubtitle} className=" text-gray-400 ">
                Create another subtitle
              </div>
              
            </div> */}
       
        </div>
      </div>
      <div className="bg-bc p-2 m-2 rounded-lg ">
       <List >
           <ListItem> A Course consists of subtitles and subtitles.</ListItem>
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