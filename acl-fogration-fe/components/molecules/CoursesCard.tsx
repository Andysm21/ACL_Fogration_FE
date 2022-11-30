import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";


const CoursesCard = () => {
  const courses = [
    { id: 1, name: "CSEN702", totalHours: 6, rating: 5, price: 40 },
    { id: 2, name: "CSEN704", totalHours: 8, rating: 4, price: 40 },
    {
      id: 3,
      name: "CSEN703",
      totalHours: 4,
      rating: 1,
      price: 40,
    },
  ];

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
    <div className="m-2 grid grid-cols-1 place-items-center  bg-bc">
      {courses.map((course) => (
        <div
          key={course.id}
          className=" border-2 border-bc flex h-52 w-1/2 flex-col rounded-lg bg-black2 items-start gap-4 justify-start p-2 text-center text-white shadow-lg"
        >
          <div className="flex flex-row font-bold text-2xl justify-center items-center gap-2">
            {course.name}
            <div className="flex flex-row  ">{stars(course.rating)}</div>
          </div>

          <div className="text-l">{course.price} $$</div>
          <div className="text-l"> {course.totalHours} Credit Hours</div>
         <div className="flex flex-row gap-2"> <Link href="viewcourse">
            <button className="bg-gradient-to-r px-4 py-2 rounded-md from-purple to-babyblue text-white hover:font-bold">
              View Course
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-gradient-to-r px-4 py-2 rounded-md from-purple to-babyblue text-white hover:font-bold">
             Enroll
            </button>
          </Link></div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;
