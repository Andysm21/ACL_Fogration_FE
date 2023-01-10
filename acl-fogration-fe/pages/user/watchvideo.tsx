import Link from 'next/link'
import React from 'react'
import Layout from '../../components/templates/Layout'
import {MdFileDownload} from "react-icons/md"
import { useEffect, useState } from "react";
import YoutubeEmbed from '../../components/organisms/YoutubeEmbed';
import axios from "axios";
import { course } from "../../interfaces";

 


const watchvideo:React.FC<{ course }> = ({ course }) => {
    const [notes, setNotes] = useState("");
  useEffect(() => {
    console.log(notes);
    }, [notes]);


  const handleNotes = (event) => {
    setNotes(event.target.value);
  
  };

  var [courseArray,setCourseArray] = useState({Course_ID: 0, //course id m7tag yetzabat string
  Course_Title: "",
  Course_Subject: "",
  Course_Description: "",
  Course_Price: 0,
  Course_Rating: 0,
  Course_Instructor: "",
  Course_Hours: 0,
  Course_Country: "",
  Course_Discount: 0,
  Course_Discount_Duration: 0,
  Course_Subtitle: {
     
      Subtitle_ID: 0, // string 3lshan 23rad a5do mn om el url
      Subtitle_Name: "",
      Subtitle_Course_ID: "",
      Subtitle_Video: {
        Video_ID: 0,
  Video_Link: "",
  Video_Subtitle: 0,
  Video_Description: "",
  Video_Length: 0,
      },
      Subtitle_Hours: "",
    },
  
  Course_Users: [],
  Course_Review: [],
  Course_Rate: [],
  Course_Exam: [],
  Course_What_You_Will_Learn: [],});
  var [link,setLink] = useState('');

  
  function getCourses(){
 
    // Axios.post("http://localhost:8000/viewCourse",{id:Number(localStorage.getItem("CourseIIDD"))}
     var x = Number(localStorage.getItem("CourseID"));

        axios.post(`http://localhost:8000/viewCourse/${x}`

   ).then((response) => {
     setCourseArray(response.data)
   }).catch((error) => console.log(error))
 }
const [VideoDesc,setVideo]=useState("")

  const getvid = () => {

    axios.post("http://localhost:8000/getviddescription", {
      Video_ID:Number(localStorage.getItem("videoID"))
    }).then((res)=>{
      setVideo(res.data)
    }).catch((error) => console.log(error))

  
}
  const download = () => {

    axios.post("http://localhost:8000/downloadNotes", {
      notes:notes
    }).then((res)=>{
      console.log(res)
    }).catch((error) => console.log(error))

   /* axios.post('http://localhost:8000/downloadNotes', {responseType: 'blob'}).then(response => {
    fs.writeFile('/temp/my.pdf', response.data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});*/
}
useEffect(() => {
  setLink(localStorage.getItem("videoLink"));
  // console.log(link)
  getCourses();
  getvid();
  

 });




  return (
    <div>
        <Layout>
            <div className="flex flex-col bg-bc w-full h-100vh ">
            <div className="flex flex-row bg-black3 m-2 rounded-md justify-start">
            <div className=" m-2">
            {/* <a  href="https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2">
              <img className="w-full" src="/images/pausedvideo.png" alt="No video posted yet 😅" />
            </a> */}
            <YoutubeEmbed embedId={link} />
          </div>
          <div  className="w-full m-2 flex flex-col">
                <textarea
                className="h-[500px] w-[99%] enabled:hover:border-gray-600  border-black1 bg-black3  text-white text-l  border-2   rounded-md  placeholder:p-2"
                placeholder="Write your notes here..."
                onChange={handleNotes}
                />
            <div className="flex justify-end p-2 ">
                <div onClick={download} className="text-white cursor-pointer">Download notes as PDF</div>
                <MdFileDownload onClick={download} size={30} className="text-white cursor-pointer" />
            </div>
               
            </div> 
          
            </div>
            
           
            <div className="flex flex-col text-white text-l gap-2 p-2 bg-black3 rounded-md m-2">
          
                <div className="flex flex-row gap-1">
                <div className="text-xl font-bold">{courseArray?.Course_Title}</div>
                
                {/* <div> {course?.Course_Subject}</div> */}
                {/* <div> {course?.Course_Title}</div>  */}
                </div>
                <div>
                {/* <div>{course?.Course_Subtitle.Subtitle_Video.video_Title}</div>  */}
                <div className=" font-bold text-l">Course Description</div>
                <div className="text-l">{courseArray?.Course_Description}</div>
                </div>
                <div>
                <div className="font-bold text-l">Video Description</div>
                {/* <div>{course?.Course_Subtitle.Subtitle_Video.video_Description}</div> */}
                <div className='text-l'>
                  {VideoDesc}
                </div>
                </div>
          </div>

            </div>
        </Layout>
    </div>
  )
}

export default watchvideo