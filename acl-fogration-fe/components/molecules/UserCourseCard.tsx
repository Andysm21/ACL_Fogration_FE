import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill ,} from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import {AiFillFilePdf} from "react-icons/ai"
import { TbCertificate } from "react-icons/tb";
import { useState } from "react";
const isCorporate = true;
const courses = [
  {
    _id: {
      $oid: "636820e12887948f062b493e",
    },
    Course_ID: 4,
    Course_Title: "Data structures & Algorithms",
    Course_Subject: "Computer Science",
    Course_Description: "Data Structures and Algorithms",
    Course_Price: 0,
    Course_Rating: 5,
    Course_Instructor: "Malak",
    Course_Hours: 5,
    Course_Country: "Egypt",
    Course_Discount: 10,
    Course_Discount_Duration: 5,
    Course_Subtitle: [
      {
        Subtitle_ID: 1,
        Subtitle_Name: "S1",
        Subtitle_Course_ID: "1",
        Subtitle_Video: [
          {
            Video_ID: 1,
            Video_Link:
              "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
            Video_Subtitle: "S1",
            Video_Description: "Introduction",
            Video_Length: 10,
          },
        ],
        Subtitle_Hours: "10",
      },
      {
        Subtitle_ID: 2,
        Subtitle_Name: "S2",
        Subtitle_Course_ID: "1",
        Subtitle_Video: [
          {
            Video_ID: 1,
            Video_Link:
              "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
            Video_Subtitle: "S1",
            Video_Description: "Introduction",
            Video_Length: 10,
          },
        ],
        Subtitle_Hours: "10",
      },
    ],
    Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
    Course_Review: ["Very Good Course"],
    Course_Rate: ["zeft"],
    Course_Exam: [
      { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: 50 },
      { Exam_ID: "2", Exam_Question_ID: ["1", "2"], Exam_Grade: 90 },
    ],
  },
  {
    _id: {
      $oid: "636820e12887948f062b493e",
    },
    Course_ID: 4,
    Course_Title: "asda",
    Course_Subject: "Computer Science",
    Course_Description: "Data Structures and Algorithms",
    Course_Price: 0,
    Course_Rating: 5,
    Course_Instructor: "Malak",
    Course_Hours: 5,
    Course_Country: "Egypt",
    Course_Discount: 10,
    Course_Discount_Duration: 5,
    Course_Subtitle: [
      {
        Subtitle_ID: 1,
        Subtitle_Name: "S1",
        Subtitle_Course_ID: "1",
        Subtitle_Video: [
          {
            Video_ID: 1,
            Video_Link:
              "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
            Video_Subtitle: "S1",
            Video_Description: "Introduction",
            Video_Length: 10,
          },
        ],
        Subtitle_Hours: "10",
      },
      {
        Subtitle_ID: 2,
        Subtitle_Name: "S2",
        Subtitle_Course_ID: "1",
        Subtitle_Video: [
          {
            Video_ID: 1,
            Video_Link:
              "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
            Video_Subtitle: "S1",
            Video_Description: "Introduction",
            Video_Length: 10,
          },
        ],
        Subtitle_Hours: "10",
      },
    ],
    Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
    Course_Review: ["Very Good Course"],
    Course_Rate: ["zeft"],
    Course_Exam: [
      { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
    ],
    Course_What_You_Will_Learn: [
      "How to use React",
      "How to use Redux",
      "How to use Material UI",
    ],
  },
];

const UserCourseCard: React.FC<{ course }> = ({ course }) => {
  if (courses.length === 0) {
    return <div className="text-center "> No courses</div>;
  }
  const stars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <div>
          <AiFillStar />
        </div>
      );
    }
    return stars;
  };
    const [starsnum, setStarsnum] = useState(0);

  return (
    <div
      key={course.Course_ID}
      className=" flex flex-col bg-bc w-75% shadow-lg text-white"
    >
      {/* //div el eswd */}
      <div className="flex flex-row bg-bc justify-between mx-6 my-4">
        {/* //div el title bel kalam */}
        <div className="flex flex-col">
          {/* //div el title bel rating */}
          <div className="flex flex-col text-3xl">
            <div className="Font-bold  text-white">{course.Course_Title}</div>
            <div className="flex flex-row  ">{stars(course.Course_Rating)}</div>
          </div>
          {/* //div el kalam eswd */}
          <div className="bg-bc flex flex-col  gap-3 my-2">
            <div>{course.Course_Description}</div>
            <div className="flex flex-row">
              {course.Course_Trainee.length} enrolled students, taught by{" "}
              <div className="text-bc">.</div>
              <Link href="/[{course.Course_Instructor}]">
                {/* // 23deli el link */}
                <div className="text-violet-400">
                  {course.Course_Instructor}
                </div>
              </Link>
            </div>

            {/* /*div el country*/}
            <div className="flex flex-row gap-1 items-center">
              <BsGlobe2 />
              {course.Course_Country}
            </div>
 
          </div>
        </div>
        {/* //div el video bel se3r wel button */}
        <div className="flex flex-col justify-center ">
          {/* //div el video nafso */}
          <div>
            <Link href="https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2">
              <img src="/images/pausedvideo.png" alt="No video posted yet 😅" />
            </Link>
          </div>
          {/* //h1 el se3r */}
          <div className="flex flex-row justify-between my-2 ">
            {!isCorporate && <h1 className=" text-violet-400 text-4xl font-bold ">
              $${course.Course_Price}
            </h1> }
            
            <Link href="/">
              {/* //link button to enroll */}
              <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-48">
                Enroll Now
              </button>
            </Link>

            

          </div>
        </div>
      </div>
      {/* //div el abyad */}
      <div className="">
        {/* //what you will learn */}
        <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
          <div className="text-white font-bold text-l">What you will learn</div>
          <div className="flex flex-col gap-1">
            {/* //m7taga 23melha grid */}
            {course.Course_What_You_Will_Learn.map((item) => (
              <div className="flex flex-row gap-1 text-white items-center">
                <TiTick />
                <div className="text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  div de m7taga tet7at ta7t */}
      {/* //This course includes  */}
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
        <div className="text-white font-bold text-l mx-2">
          This course includes
        </div>
        <div className="flex flex-row">
          {/* //course inludes content */}
          <div className="flex flex-col border-black1 text-white bg-black2 m-2 px-2 w-52 h-20 rounded-md justify-between items-center py-2">
            <BsPlayBtnFill size={30} />
            <div className="  justify-center items-end">
              {course.Course_Hours} hours of video
            </div>
          </div>

          <div className="flex flex-col border-black1 text-white bg-black2 m-2 px-2 w-52 h-20 rounded-md justify-between items-center py-2">
            <div className="text-white">
              <TbCertificate size={40} color="white" />
            </div>
            <div className="  justify-center items-end">
              Certificate of completion
            </div>
          </div>
        </div>
      </div>
      {/* //Course content  */}
      <div className="bg-black3 rounded-md m-6 flex flex-col p-2">
        <h1 className="text-white font-bold text-3xl ">Course Content</h1>
        {course.Course_Subtitle.map((subtitle) => {
          return (
            <div>
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-xl font-bold">
                    {subtitle.Subtitle_Name}
                  </div>
                  <div className="text-l flex items-end ">
                    Total Time: {subtitle.Subtitle_Hours} mins
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-[100%] ">
                {subtitle.Subtitle_Video.map((video) => {
                  return (
                    <div>
                      <img
                        className="flex-shrink-0  "
                        src="/images/pausedvideo.png"
                        alt="No image yet 😅"
                      />

                      <div className="text-l">{video.Video_Description}</div>
                      <div className="text-l">{video.Video_Length} mins</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
        {/* exams of course */}
        <div className="flex flex-col bg-black3 rounded-md m-6">
          <div className=" text-white font-bold text-l mx-2">
          Course Material
        </div>
        <div className="flex flex-row p-2">
            {course.Course_Exam.map((item) => {
              return(
              <div key={course.Course_Exam.Exam_ID}  className="flex flex-col items-start ">
                      <AiFillFilePdf size={100}/>
                      <div className="items-center justify-center flex flex-col">
                        <div className="text-l">Exam {item.Exam_ID}</div>
                      <div className="text-l">{item.Exam_Grade} %</div>
                       <div className="text-l">{item.Exam_Question_ID.length} Questions</div>
                      </div>
                    </div>
              )
            })}
        </div>
        </div>






    </div>
  );
};

export default UserCourseCard;