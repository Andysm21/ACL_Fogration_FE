import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
import { useEffect, useState } from "react";
const isCorporate = true;

// const courses = [
//   {
//     _id: {
//       $oid: "636820e12887948f062b493e",
//     },
//     Course_ID: 4,
//     Course_Title: "Computer ",
//     Course_Subject: "Computer Science",
//     Course_Description: "Data Structures and Algorithms",
//     Course_Price: 0,
//     Course_Rating: 5,
//     Course_Instructor: "Malak",
//     Course_Hours: 5,
//     Course_Country: "Egypt",
//     Course_Discount: 10,
//     Course_Discount_Duration: 5,
//     Course_Subtitle: ["S1", "S2"],
//     Course_Trainee: ["Ahmed"],
//     Course_Review: ["Very Good Course"],
//     Course_Rate: ["null"],
//     Course_Exam: ["null"],
//   },
//   {
//     _id: {
//       $oid: "636820e12887948f062b493e",
//     },
//     Course_ID: 4,
//     Course_Title: "Fogration",
//     Course_Subject: "Computer Science",
//     Course_Description: "Data Structures and Algorithms",
//     Course_Price: 0,
//     Course_Rating: 5,
//     Course_Instructor: "Malak",
//     Course_Hours: 5,
//     Course_Country: "Egypt",
//     Course_Discount: 10,
//     Course_Discount_Duration: 5,
//     Course_Subtitle: ["S1", "S2"],
//     Course_Trainee: ["Ahmed"],
//     Course_Review: ["Very Good Course"],
//     Course_Rate: ["null"],
//     Course_Exam: ["null"],
//   },

//   {
//     _id: {
//       $oid: "636820e12887948f062b493e",
//     },
//     Course_ID: 4,
//     Course_Title: "asda",
//     Course_Subject: "Computer Science",
//     Course_Description: "Data Structures and Algorithms",
//     Course_Price: 0,
//     Course_Rating: 5,
//     Course_Instructor: "Malak",
//     Course_Hours: 5,
//     Course_Country: "Egypt",
//     Course_Discount: 10,
//     Course_Discount_Duration: 5,
//     Course_Subtitle: ["S1", "S2"],
//     Course_Trainee: ["Ahmed"],
//     Course_Review: ["Very Good Course"],
//     Course_Rate: ["null"],
//     Course_Exam: ["null"],
//   },
// ];

// const course = {
//   _id: {
//     $oid: "636820e12887948f062b493e",
//   },
//   Course_ID: 4,
//   Course_Title: "Data structures & Algorithms",
//   Course_Subject: "Computer Science",
//   Course_Description:
//     "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
//   Course_Price: 0,
//   Course_Rating: 5,
//   Course_Instructor: "Malak",
//   Course_Hours: 5,
//   Course_Country: "Egypt",
//   Course_Discount: 10,
//   Course_Discount_Duration: 5,
//   Course_Subtitle: [
//     {
//       Subtitle_ID: 1,
//       Subtitle_Name: "S1",
//       Subtitle_Course_ID: "1",
//       Subtitle_Video: [
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//       ],
//       Subtitle_Hours: "10",
//     },
//     {
//       Subtitle_ID: 2,
//       Subtitle_Name: "S2",
//       Subtitle_Course_ID: "1",
//       Subtitle_Video: [
//         {
//           Video_ID: 1,
//           Video_Link:
//             "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//           Video_Subtitle: "S1",
//           Video_Description: "Introduction",
//           Video_Length: 10,
//         },
//       ],
//       Subtitle_Hours: "10",
//     },
//   ],
//   Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
//   Course_Review: ["Very Good Course"],
//   Course_Rate: ["zeft"],
//   Course_Exam: [
//     {
//       Exam_ID: "1",
//       Exam_Question_ID: [
//         {
//           Question_ID: "1",
//           Question_Name: "Ex 1",
//           Question_choices: ["a", "b", "c", "d"],
//           Question_Correct_Answers: "a b d c",
//           Question_Grade: "A",
//         },
//       ],
//       Exam_Grade: "A",
//       Exam_Instructor_ID: "123",
//       Exam_Course_ID: "4",
//     },
//   ],
//   Course_What_You_Will_Learn: [
//     "Learn how to use the most popular data structures",
//     "Learn how to use the most popular algorithms",
//     "Learn how to use the most popular data structures",
//   ],
// };
const UserMyCoursesCard:React.FC<{ courses }> = ({courses }) => {
    const [isCorporate, setIsCorporate]= useState("false");
    const [factor, setFactor] = useState(1);
    const [curr, setCurr] = useState('€');

    useEffect(() => {
    setIsCorporate(localStorage.getItem("isCorp"))
      if (localStorage.getItem('currency') == '£'){
          setFactor(factor*2);
          setCurr('£');
        }

      if (localStorage.getItem('currency') == '$'){
          setFactor(factor*1.5);
          setCurr('$');
        }
        
  })

  const viewPrice =(price:number)=>{
    if(isCorporate == "false"){
      return  price   
    }
    else{
      return 
    }
  }

  const discount =(discount:number,price:number) =>{
    if(isCorporate == "false"){
        if((discount == 0) || price == 0){
      return <h1 className=" text-violet-400 text-4xl ">
                {price*factor} {curr}
              </h1>

    }
    else{ 
      
      return(
      <div className="flex flex-row">
      <div className=" text-violet-400 text-4xl line-through">{price}</div>
      <div className="text-black3 text-4xl  ">.</div>
      <div className=" text-violet-400 text-4xl  ">
                    {price *factor* (100-discount)/100} {curr}</div>
      </div>
      )
    }
    }else{
      return (<div>
        
      </div>)
    }}

   function DiscountDuration(duration : number,discount : number ,price : number){
         if(isCorporate == "true"){
      return <div></div>                                                                    
    }else{
      if(duration == 0 || discount == 0 || price == 0){
        return <div></div>
      }
        else{
         return  <p className=" text-violet-400 text-light text-sm">Discount available for {duration} days</p>
    }
  }
  }
 
  if (courses?.length === 0) {
    return <div className="text-center text-white "> No courses</div>;
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


  return (
    <div className="grid grid-cols-2 text-white bg-bc gap-4">
      {courses?.map((course) => (
        <div className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 ">
          {/* //div el title bel kalam */}
          <div className="flex flex-col">
            {/* //div el title bel rating */}
            <div className="flex flex-col text-3xl">
              <div className="Font-bold  text-white">{course?.Course_Title}</div>
              <div className="flex flex-row  ">
                {stars(course?.Course_Rating)}
              </div>
            </div>
            {/* //div el kalam eswd */}
            <div className="bg-black3 flex flex-col  gap-2 my-2">
              {course?.Course_Trainee} enrolled students
              <div className="text-white flex flex-row">
                Taught by
                <div onClick={()=>{
                  localStorage.setItem("course_instructor", course?.Course_Instructor?.Instructor_ID)
                }} ></div>
                <div className="text-black3">.</div>

                <Link href="/user/instructor">

                  {/* // 23deli el link */}
                  <div className="text-violet-400">
                    {course?.Course_Instructor?.Instructor_FirstName}
                  </div>
                </Link>
                
              </div>
              {/* /*div el country*/}
              <div className="flex flex-row gap-1 items-center">
                <BsGlobe2 />
                {course?.Course_Country}
              </div>
              <h1 className=" text-violet-400 text-4xl ">
              {discount(course.Course_Discount,viewPrice(course.Course_Price))}
              </h1>
              {DiscountDuration(course.Course_Discount_Duration,course.Course_Discount,viewPrice(course.Course_Price))}
            </div>
          </div>
          {/* //div el video bel se3r wel button */}
          <div className="flex flex-col justify-center ">
            {/* //div el video nafso */}
            <div>
              <Link href="https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2">
                <img
                  src="/images/pausedvideo.png"
                  alt="No video posted yet 😅"
                />
              </Link>
            </div>
            {/* //h1 el se3r */}
            <div className="flex flex-row justify-between my-2">
              <Link href="viewmycourse">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded w-80 border border-violet-400" onClick={()=>{
                  localStorage.removeItem('CourseID')
                  localStorage.setItem('CourseID', course?.Course_ID)
              
                }}>
                  View Course
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserMyCoursesCard;
//<div
//   key={course?.id}
//   className=" border-2 border-bc flex h-52 w-1/2 flex-col rounded-lg bg-black2 items-start gap-4 justify-start p-2 text-center text-white shadow-lg"
// >
//   <div className="flex flex-row font-bold text-2xl justify-center items-center gap-2">
//     {course?.name}
//     <div className="flex flex-row  ">{stars(course?.rating)}</div>
//   </div>

//   <div className="text-l">{course?.price} $$</div>
//   <div className="text-l"> {course?.totalHours} Hours</div>
//  <div className="flex flex-row gap-2"> <Link href="viewcourse">
//     <button className="bg-gradient-to-r px-4 py-2 rounded-md from-purple to-babyblue text-white hover:font-bold">
//       View Course
//     </button>
//   </Link>
//   <Link href="/login">
//     <button className="bg-gradient-to-r px-4 py-2 rounded-md from-purple to-babyblue text-white hover:font-bold">
//      Enroll
//     </button>
//   </Link></div>
// </div>
