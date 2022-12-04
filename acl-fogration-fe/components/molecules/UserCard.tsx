import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";

const person = {
  _id: {
    $oid: "636880e12886948f062b493e",
  },
  User_ID: 4,
  User_Name: "Pasha",
  User_Email: "Pasha@gmail.com",
  User_Password: "1234",
  User_Role: "Student",
  User_Country: "Egypt",
  User_City: "Berlin",
  User_Address: "ALexanderplatz",
  User_Courses: [
    {
      _id: {
        $oid: "666820e1288794o098062b493e",
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
    },
  ],
};

const CourseCard: React.FC<{ user }> = ({ user }) => {
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
    <div
      key={person.User_ID}
      className=" border-2 border-bc flex flex-col p-4 bg-black2 w-75% shadow-lg text-white"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-2">
          <CgProfile size={80} />
          <div className="flex flex-col items-center justify-center ">
            <div className="font-bold text-2xl">{person.User_Name} </div>
            <div className="font-light text-md">{person.User_Role} </div>
          </div>
        </div>
        <div className="text-l"> Address: {person.User_Address}</div>
        <div className="text-l"> City: {person.User_City}</div>
        <div className="text-l">Country: {person.User_Country}</div>

        {person.User_Role == "Instructor" && (
          <div>
            <div>Teaches</div>
            <Link
              href="/[{course.Course_id}]"
              className="hover:cursor-pointer hover:undeline"
            >
              <div>{person.User_Courses[0].Course_Title} </div>
              <div>{person.User_Courses[0].Course_Rating}</div>
            </Link>
          </div>
        )}

        {person.User_Role != "Instructor" && (
          <div>
            <div>Enrolled in </div>
            <Link
              href="/[{course.Course_id}]"
              className="hover:cursor-pointer hover:undeline text-l"
            >
              <div className="flex flex-col justify-start">
                {person.User_Courses[0].Course_Title}
                <div className="flex flex-row  ">
                  {stars(person.User_Courses[0].Course_Rating)}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
