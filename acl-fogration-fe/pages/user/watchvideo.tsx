import Link from 'next/link'
import React from 'react'
import Layout from '../../components/templates/Layout'
import {MdFileDownload} from "react-icons/md"
import { useEffect, useState } from "react";
import YoutubeEmbed from '../../components/organisms/YoutubeEmbed';

 


const watchvideo:React.FC<{ course }> = ({ course }) => {
    const [notes, setNotes] = useState("");
  useEffect(() => {
    console.log(notes);
    }, [notes]);
  const handleNotes = (event) => {
    setNotes(event.target.value);
  
  };

  const download = () => {
    console.log(notes);
}
  return (
    <div>
        <Layout>
            <div className="flex flex-col bg-bc w-full h-100vh ">
            <div className="flex flex-row bg-black3 m-2 rounded-md justify-start">
            <div className=" m-2">
            {/* <a  href="https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2">
              <img className="w-full" src="/images/pausedvideo.png" alt="No video posted yet 😅" />
            </a> */}
            <YoutubeEmbed embedId="rokGy0huYEA" />
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
                <div className="text-xl font-bold">CSEN601</div>
                <div className="text-xl font-bold">Computer Networks</div>
                {/* <div> {course?.Course_Subject}</div> */}
                {/* <div> {course?.Course_Title}</div>  */}
                </div>
                <div>
                <div className="font-bold text-l">Video Title</div>
                {/* <div>{course?.Course_Subtitle.Subtitle_Video.video_Title}</div>  */}
                <div className="text-l">Introduction to Computer Networks</div>
                </div>
                <div>
                <div className="font-bold text-l">Video Description</div>
                {/* <div>{course?.Course_Subtitle.Subtitle_Video.video_Description}</div> */}
                <div className='text-l'>Design is the art of considered creation. Our goal is to satisfy the diverse spectrum of human needs. As those needs evolve, so too must our designs, practices, and philosophies. We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science.
                A material metaphor is the unifying theory of a rationalized space and a system of motion. Our material is grounded in tactile reality, inspired by our study of paper and ink, yet open to imagination and magic. </div>
                </div>
          </div>

            </div>
        </Layout>
    </div>
  )
}

export default watchvideo