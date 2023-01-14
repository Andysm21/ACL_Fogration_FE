import React, { useState } from 'react'
import  Link  from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai' 
import axios from 'axios';
import router from 'next/router';


const CourseCreation = () => {

  const [createCourseStyle,setCreateCourseStyle] = useState("mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded  border border-violet-400");
  const [addVideoStyle,setAddVideoStyle] = useState("mx-2 my-2 bg-gray-500 text-white py-2 px-4 rounded w-72 ");
  const [addSubtitleStyle,setAddSubtitleStyle] = useState("mx-2 my-2 bg-gray-500 text-white py-2 px-4 rounded w-72 ");
  const [createExamArrow,setCreateExamArrow] = useState("text-gray-400");
  const [enableVideo,setEnableVideo] = useState(true);
  const [enableCreateExam,setEnableCreateExam] = useState(false);
  const [enableCreateCourse,setEnableCreateCourse] = useState(false);
  const [enableSubtitle,setEnableSubtitle] = useState(true);
  
    const addVideo = () => {
    axios.post("http://localhost:8000/createVideo",
    {title: videoTitle, link: videoLink,
    subtitle: localStorage.getItem("subtitle_id"), description: videoDescription}

    ).then((response) => {
      console.log(response.data);
    }).catch((error) => console.log(error))


     localStorage.setItem("video" +  "Number", `${videoNumber}`);
     localStorage.setItem("video" + videoNumber + "Title", videoLink);

     localStorage.setItem("video" + videoNumber + "Link", videoLink);
     localStorage.setItem("video" + videoNumber + "Description", videoDescription); 
    
    console.log("video" +  "Number", localStorage.getItem("video" +  "Number"));
    console.log("video" + videoNumber + "Title", localStorage.getItem("video" + videoNumber + "Title",));


    console.log("video" + videoNumber + "Link", localStorage.getItem("video" + videoNumber + "Link",));
    console.log("video" + videoNumber + "Description", localStorage.getItem("video" + videoNumber + "Description",));

        setVideoNumber(videoNumber + 1);
        setVideoTitle("");
        setVideoLink("");
        setVideoDescription("");   
        // setAddSubtitleStyle("mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded w-72 border border-violet-400");
        // setEnableSubtitle(false); 

     }
  const addSubtitle = () => {

    axios.post("http://localhost:8000/createSubtitle",
    {Subtitle: subtitleName, Subtitle_Course_ID: Number(localStorage.getItem("course_id"))}

    ).then((response) => {
      console.log(response.data);
      localStorage.setItem("subtitle_id", response.data);
 }).catch((error) => console.log(error))


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
    // setAddVideoStyle("mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded w-72 border border-violet-400");
    // setAddSubtitleStyle("mx-2 my-2 bg-gray-500 text-white py-2 px-4 rounded w-72 ");
    // setEnableSubtitle(true);
    // setEnableVideo(false);

  };

  const createCourse = () => {
    axios.post("http://localhost:8000/createCourse",
    {Course_Instructor: localStorage.getItem("user_id"), Course_Title:courseTitle, 
    Course_Subject: courseSubject, Course_Description: courseDescription, 
    Course_Price: coursePrice, Course_Country: courseCountry,Course_Video_Preview: coursePreviewVideo}

    ).then((response) => {
      console.log(response.data);
      localStorage.setItem("course_id", response.data);
 }).catch((error) => console.log(error))

  setAddSubtitleStyle("mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded w-72 border border-violet-400");
  setAddVideoStyle("mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded w-72 border border-violet-400");
  setCreateCourseStyle("mx-2 my-2 bg-gray-500 text-white py-2 px-4 rounded ");
  setCreateExamArrow("text-violet-400");
  setEnableSubtitle(false);
  setEnableVideo(false);
  setEnableCreateExam(false);
  setEnableCreateCourse(true);
  
  // createCourseButton();
  //router.reload();

  }  

  
    const gotoexam = () => {
      axios.post("http://localhost:8000/createExam",
      {Instructor: localStorage.getItem("user_id"),
      Course: localStorage.getItem("course_id")}
    
      ).then((response) => {
        console.log(response.data);
        localStorage.setItem("exam_id", response.data);
      }).catch((error) => console.log(error))
    


    // createCourseButton();
    //router.reload();

        // localStorage.setItem("course" +  "ID", `${courseID}`);
        localStorage.setItem("courseTitle", courseTitle);
        localStorage.setItem("courseSubject", courseSubject);
        localStorage.setItem("courseDescription", courseDescription);
        localStorage.setItem("coursePrice", coursePrice);
        localStorage.setItem("courseCountry", courseCountry);
        localStorage.setItem("coursePreviewVideo", coursePreviewVideo);
        localStorage.setItem("subtitle" + "Number", `${subtitleNumber}`);
        localStorage.setItem("subtitle" + subtitleNumber + "Name", subtitleName);
        localStorage.setItem("video" +  "Number", `${videoNumber}`);
        localStorage.setItem("video" + videoNumber + "Title", videoTitle);
        localStorage.setItem("video" + videoNumber + "Link", videoLink);
        localStorage.setItem("video" + videoNumber + "Description", videoDescription); 

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
          "subtitle" +  "Number",
          localStorage.getItem("subtitle" + "Number")
        );
        console.log(
          "subtitle" + subtitleNumber + "Name",
          localStorage.getItem("subtitle" + subtitleNumber + "Name")
        );
       console.log(
         "video" +  "Number",
         localStorage.getItem("video" +  "Number")
       );
       console.log(
         "video" + videoNumber + "Title",
         localStorage.getItem("video" + videoNumber + "Title")
       );
       console.log(
         "video" + videoNumber + "Link",
         localStorage.getItem("video" + videoNumber + "Link")
       );
       console.log(
         "video" + videoNumber + "Description",
         localStorage.getItem("video" + videoNumber + "Description")
       );
        
        // setCourseID(1);
        setVideoNumber(1);
        setSubtitleNumber(1);

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
    //     return <button className="mx-2 my-2 bg-gray-500 text-white py-2 px-4 rounded" >Create Course</button>
    //   }
    //   else{
    //     return  <button
    //           className="mx-2 my-2 bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400"
    //           onClick={createCourse}
    //         >
    //          Create course
    //         </button>
    //   }
    // }
    
  return (
    <div className=" p-2 m-2 rounded-lg flex flex-row w-11/12 justify-between">
      <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3 ">
        {/* <div className="text-l mx-2"> Course ID </div>
        <input
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleCourseID}
        /> */}
        <div className="mx-2 text-l">Title </div>
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
          placeholder='This is a course about ...'
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseDescription}
        />
        <div className="mx-2 text-l">Price</div>
        <input
         placeholder="€€  "
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCoursePrice}
        />
        <div className="mx-2 text-l">Country</div>
        <input
          placeholder="Egypt"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2    rounded-md h-12"
          onChange={handleCourseCountry}
        />
        <div className="mx-2 text-l">Preview video</div>
        <input
         placeholder="https://www.youtube.com/watch?v=x"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleCoursePreviewVideo}
        />
        <button
              className={createCourseStyle}
              onClick={createCourse}
              disabled={enableCreateCourse}
            >
             Create course
            </button>
            
            {/* {createCourseButton()} */}
      </div>
      
      <div className="bg-bc p-2 m-2 rounded-lg flex flex-col w-2/3 justify-between">
        <div className="mx-2 text-l">Subtitle number</div>
        <input
          value={subtitleNumber}
          disabled
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onClick={handleSubtitleNumber}
        />
        <div className="mx-2 text-l">Subtitle name</div>
        <input
          placeholder="Introduction"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleSubtitleName}
        />
        <div className="mx-2 text-l">Video number</div>
        <input
          value={videoNumber}
          disabled
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoNumber}
        />
        <div className="mx-2 text-l">Video title</div>
        <input
          value={videoTitle}
          placeholder="Fogr"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoTitle}
        />
        <div className="mx-2 text-l">Video link</div>
        <input
        
          defaultValue={videoLink}
          placeholder="https://www.youtube.com/watch?v=x"
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoLink}
        />
        <div className="mx-2 text-l">Video description</div>
        <textarea
          defaultValue={videoDescription}
          placeholder="This is a video about the topic of ..."
          className="mx-2 enabled:hover:border-gray-600  border-bc bg-black3  text-white p-1 text-l  border-2   rounded-md h-12"
          onChange={handleVideoDescription}
        />
        <div className="flex flex-col  ">
          <div className="flex flex-row">
            <button
              className={addVideoStyle}
              onClick={addVideo} 
              disabled={enableVideo}
            >
              Add video
            </button>
            <button
              className={addSubtitleStyle}  
              disabled={enableSubtitle}
              onClick={addSubtitle}
            >
              Add subtitle
            </button>
          </div>

          <Link href="/instructor/createexam" className="">
           
            <div className="flex  justify-end  items-center flex-row ">
              <div onClick={gotoexam} className={createExamArrow}>
                Create an exam for the course
              </div>
              <AiOutlineArrowRight className={createExamArrow} size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCreation;