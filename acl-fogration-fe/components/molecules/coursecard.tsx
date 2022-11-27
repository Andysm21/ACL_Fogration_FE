import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button } from "@mui/material";

// let iconMap = new Map<string, any>([
//   ["camera", <HiVideoCamera className="h-32 w-32" key={1} />],
//   ["projector", <RiProjector2Line className="h-32 w-32" key={2} />],
//   ["microphone", <GiOldMicrophone className="h-32 w-32" key={3} />],
// ]);

const CourseCard = () => {
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
    <div className="m-2 grid grid-cols-1 place-items-center ">
      {courses.map((course) => (
        <div
          key={course.id}
          className=" border-1 flex h-52 w-2/3 flex-col items-start gap-3 justify-start  border-gray-300 p-2 text-center text-darkgrey shadow-lg"
        >
          <div className=" font-bold text-2xl" key={course.id}>
            {course.name}
            <div className="flex flex-row">{stars(course.rating)}</div>
          </div>

          <div className="text-l" key={course.id}>
            {course.price}
          </div>
          <div className="text-l" key={course.id}>
            {" "}
            {course.totalHours} Credit Hours
          </div>
          <Button variant="contained">Book Course</Button>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
