import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { BsGlobe2, BsPlayBtnFill } from "react-icons/bs";
const isCorporate = true;

const UserCoursesCard:React.FC<{courses}> = ({courses}) => {


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
  return (
    <div className="grid grid-cols-2 text-white place-items-center bg-bc gap-4">
      {courses.map((course) => (
        <div className="flex gap-4 flex-row bg-black3 justify-between mx-6 my-4 rounded-lg p-2 ">
          {/* //div el title bel kalam */}
          <div className="flex flex-col">
            {/* //div el title bel rating */}
            <div className="flex flex-col text-3xl">
              <div className="Font-bold  text-white">{course.Course_Title}</div>
              <div className="flex flex-row  ">
                {stars(course.Course_Rating)}
              </div>
            </div>
            {/* //div el kalam eswd */}
            <div className="bg-black3 flex flex-col  gap-3.5 my-2">
              {course.Course_Trainee.length} enrolled students
              <div className="text-white flex flex-row">
                Taught by
                <div className="text-black3">.</div>
                <Link href="/[{course.Course_Instructor}]">
                  {/* // 23deli el link */}
                  <div className="text-violet-400">
                    {course.Course_Instructor.Instructor_FirstName}
                  </div>
                </Link>
              </div>
              {/* /*div el country*/}
              <div className="flex flex-row gap-1 items-center">
                <BsGlobe2 />
                {course.Course_Country}
              </div>
              {!isCorporate && <h1 className=" text-violet-400 text-4xl font-bold ">
              $${course.Course_Price}
            </h1> }
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
              <Link href="viewcourse">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-36">
                  View Course
                </button>
              </Link>
              <Link href="/">
                {/* //link button to enroll */}
                <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded w-36">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCoursesCard;
//<div
//   key={course.id}
//   className=" border-2 border-bc flex h-52 w-1/2 flex-col rounded-lg bg-black2 items-start gap-4 justify-start p-2 text-center text-white shadow-lg"
// >
//   <div className="flex flex-row font-bold text-2xl justify-center items-center gap-2">
//     {course.name}
//     <div className="flex flex-row  ">{stars(course.rating)}</div>
//   </div>

//   <div className="text-l">{course.price} $$</div>
//   <div className="text-l"> {course.totalHours} Hours</div>
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
