import React, { useState } from 'react'
import  Link  from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai' 
import axios from 'axios';


const CourseCreation = () => {
    const addVideo = () => {
     localStorage.setItem("video" +  "ID", `${videoID}`);
     localStorage.setItem("video" + videoID + "Link", videoLink);
     localStorage.setItem("video" + videoID + "Description", videoDescription); 
    
    console.log("video" +  "ID", localStorage.getItem("video" +  "ID"));
    console.log("video" + videoID + "Link", localStorage.getItem("video" + videoID + "Link",));
    console.log("video" + videoID + "Description", localStorage.getItem("video" + videoID + "Description",));

        setVideoID(videoID + 1);
        setVideoLink("");
        setVideoDescription("");    

     }
  const addSubtitle = () => {
    localStorage.setItem("subtitle" +  "ID", `${subtitleID}`);
    localStorage.setItem("subtitle" + subtitleID + "Name", subtitleName);
   
    console.log(
      "subtitle" + "ID",
      localStorage.getItem("subtitle" + "ID")
    );
    console.log(
      "subtitle" + subtitleID + "Name",
      localStorage.getItem("subtitle" + subtitleID + "Name")
    );
     setSubtitleName("");
      setSubtitleID(subtitleID + 1);
      
      setVideoID(1);
      setVideoLink("");
      setVideoDescription("");
    console.log(subtitleID);

  };

  
    const gotoexam = () => {
        // localStorage.setItem("course" +  "ID", `${courseID}`);
        localStorage.setItem("courseTitle", courseTitle);
        localStorage.setItem("courseSubject", courseSubject);
        localStorage.setItem("courseDescription", courseDescription);
        localStorage.setItem("coursePrice", coursePrice);
        localStorage.setItem("courseCountry", courseCountry);
        localStorage.setItem("coursePreviewVideo", coursePreviewVideo);
        localStorage.setItem("subtitle" + "ID", `${subtitleID}`);
        localStorage.setItem("subtitle" + subtitleID + "Name", subtitleName);
        localStorage.setItem("video" +  "ID", `${videoID}`);
        localStorage.setItem("video" + videoID + "Link", videoLink);
        localStorage.setItem("video" + videoID + "Description", videoDescription); 

        console.log(
          "course" + "ID",
          localStorage.getItem("course" + "ID")
        );
        console.log(
          "courseTitle",
          localStorage.getItem("course" + courseTitle + "Title")
        );
        console.log(
          "courseSubject",
          localStorage.getItem("course" + courseSubject + "Subject")
        );
         console.log(
           "courseDescription",
           localStorage.getItem("course" + courseDescription + "Description")
         );
         console.log(
           "coursePrice",
           localStorage.getItem("course" + coursePrice + "Price")
         );
         console.log(
           "courseCountry",
           localStorage.getItem("course" + courseCountry + "Country")
         );
         console.log(
           "coursePreviewVideo",
           localStorage.getItem("course" + coursePreviewVideo + "PreviewVideo")
         );
        console.log(
          "subtitle" +  "ID",
          localStorage.getItem("subtitle" + "ID")
        );
        console.log(
          "subtitle" + subtitleID + "Name",
          localStorage.getItem("subtitle" + subtitleID + "Name")
        );
       console.log(
         "video" +  "ID",
         localStorage.getItem("video" +  "ID")
       );
       console.log(
         "video" + videoID + "Link",
         localStorage.getItem("video" + videoID + "Link")
       );
       console.log(
         "video" + videoID + "Description",
         localStorage.getItem("video" + videoID + "Description")
       );
        
        // setCourseID(1);
        setVideoID(1);
        setSubtitleID(1);

    }
    // const [i, setI] = useState(1);
    
  //   const [courseID, setCourseID] = useState(1);
  //   const handleCourseID = (event) => {
  //    setCourseID(event.target.value);
  //    // console.log(questionName)
  //  };

  
  const [courseTitle, setCourseTitle] = useState("");
  const handleCourseTitle = (event) => {
    setCourseTitle(event.target.value);
    // console.log(questionName)
  };
    
  const [courseSubject, setCourseSubject] = useState("");
  const handleCourseSubject = (event) => {
    setCourseSubject(event.target.value);
    // console.log(questionName)
  };
  const [courseDescription, setCourseDescription] = useState("");
  const handleCourseDescription = (event) => {
    setCourseDescription(event.target.value);
    // console.log(questionName)
  };
  const [coursePrice, setCoursePrice] = useState("");
  const handleCoursePrice = (event) => {
    setCoursePrice(event.target.value);
    // console.log(questionName)
  };
  const [courseCountry, setCourseCountry] = useState("");
  const handleCourseCountry = (event) => {
    setCourseCountry(event.target.value);
    // console.log(questionName)
  };
    
   const [coursePreviewVideo, setCoursePreviewVideo] = useState("");
   const handleCoursePreviewVideo = (event) => {
     setCoursePreviewVideo(event.target.value);
     // console.log(questionName)
   };  
    
    // add subtitle 
     const [subtitleID, setSubtitleID] = useState(1);
     const handleSubtitleID = (event) => {
       setSubtitleID(event.target.value);
       // console.log(questionName)
    };  
     const [subtitleName, setSubtitleName] = useState("");
     const handleSubtitleName = (event) => {
       setSubtitleName(event.target.value);
       // console.log(questionName)
    }; 
     const [videoID, setVideoID] = useState(1);
     const handleVideoID = (event) => {
       setVideoID(event.target.value);
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
    let  courseCreated = false;
    const createCourseButton = () =>{
      if(courseCreated){
        {console.log(courseCreated)}
        return <button className="mx-2 my-2 bg-gray-500 text-white font-bold py-2 px-4 rounded" >Create Course</button>
      }
      else{
        return  <button
              className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
              onClick={createCourse}
            >
             Create course
            </button>
      }
    }

    const createCourse = () => {
    
    }
    
    
  return (
    <div className=" p-2 m-2 rounded-lg flex flex-row w-11/12 justify-between">
      <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3">
        {/* <div className="text-l mx-2"> Course ID </div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleCourseID}
        /> */}
        <div className="m-2 text-l">Course Title </div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseTitle}
        />
        <div className="mx-2 text-l">Course Subject</div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseSubject}
        />
        <div className="mx-2 text-l">Course Description</div>
        <textarea
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseDescription}
        />
        <div className="mx-2 text-l">Course Price</div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCoursePrice}
        />
        <div className="mx-2 text-l">Course Country</div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseCountry}
        />
        <div className="mx-2 text-l">Course Preview Video</div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleCoursePreviewVideo}
        />
        <button
              className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
              onClick={createCourse}
            >
             Create course
            </button>
            
            {/* {createCourseButton()} */}
      </div>
      
      <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3 justify-between">
        <div className="mx-2 text-l">Subtitle ID</div>
        <input
          value={subtitleID}
          disabled
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onClick={handleSubtitleID}
        />
        <div className="mx-2 text-l">Subtitle Name</div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleSubtitleName}
        />
        <div className="mx-2 text-l">Video ID</div>
        <input
          value={videoID}
          disabled
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoID}
        />
        <div className="mx-2 text-l">Video Link</div>
        <input
          defaultValue={videoLink}
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoLink}
        />
        <div className="mx-2 text-l">Video Description</div>
        <textarea
          defaultValue={videoDescription}
          placeholder="description"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoDescription}
        />
        <div className="flex flex-col  ">
          <div className="flex flex-row">
            <button
              className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72"
              onClick={addVideo}
            >
              Add video
            </button>
            <button
              className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-72"
              onClick={addSubtitle}
            >
              Add Subtitle
            </button>
          </div>

          <Link href="/instructor/createexam" className="">
           
            <div className="flex  justify-end  items-center flex-row gap-2 ">
              <div onClick={gotoexam} className=" text-gray-400 ">
                Create Exam For The Course
              </div>
              <AiOutlineArrowRight className="text-gray-400" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCreation;