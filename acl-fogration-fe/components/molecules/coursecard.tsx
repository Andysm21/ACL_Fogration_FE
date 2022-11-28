import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link } from "@mui/material";
const courses = [
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
  },
];
{
}
interface subtitle {
  Subtitle_ID: number; // string 3lshan 23rad a5do mn om el url
  Subtitle_Name: string;
  Subtitle_Course_ID: string;
  Subtitle_Video: video[];
  Subtitle_Hours: string;
}
interface video {
  Video_ID: number;
  Video_Link: string;
  Video_Subtitle: string;
  Video_Description: string;
  Video_Length: number;
}

interface trainee {
  Trainee_ID: number;
  Trainee_Name: string;
}
interface exam {
  Exam_ID: string;
  Exam_Question_ID: questions[];
  Exam_Grade: string;
  Exam_Instructor_ID: string;
  Exam_Course_ID: string;
}
interface questions {
  Question_ID: string;
  Question_Name: string;
  Question_choices: string[];
  Question_Correct_Answers: string;
  Question_Garde: string;
}

interface Props {
  course: {
    _id: {
      $oid: string;
    };
    Course_ID: number; //course id m7tag yetzabat string
    Course_Title: string;
    Course_Subject: string;
    Course_Description: string;
    Course_Price: number;
    Course_Rating: number;
    Course_Instructor: string;
    Course_Hours: number;
    Course_Country: string;
    Course_Discount: number;
    Course_Discountduration: number;
    Course_Subtitle: subtitle[];
    Course_Trainee: trainee[];
    Course_Review: string[];
    Course_Rate: string[];
    Course_Exam: exam[];
  };
}
[];

const CourseCard: React.FC<Props> = ({ course }) => {
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
    <div
      key={course.Course_ID}
      className=" border-2 border-bc flex flex-row rounded-lg bg-black2  shadow-lg text-white"
    >
      <div className="flex flex-col items-start gap-4 justify-start p-2  text-white">
        <div className="flex flex-row font-bold text-2xl justify-start items-center gap-2">
          {course.Course_Title}
          <div className="flex flex-row  ">{stars(course.Course_Rating)}</div>
        </div>
        <div className="text-l">{course.Course_Price} $$</div>
        <div className="text-l"> {course.Course_Hours} Credit Hours</div>
        <div className="text-l">{course.Course_Instructor}</div>
        <div className="text-l">{course.Course_Country}</div>
        <div className="text-l">{course.Course_Subject}</div>
        <div className="text-l">{course.Course_Description}</div>
        <div className="text-l">{course.Course_Discount}</div>
        <div className="text-l">{course.Course_Discountduration}</div>
        <div className="text-l">{course.Course_Trainee[0].Trainee_Name}</div>
        <div className="text-l">{course.Course_Review}</div>
        <div className="text-l">{course.Course_Rate}</div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Link href="/login">
            <button className="bg-gradient-to-r px-4 py-2 rounded-md from-purple to-babyblue text-white hover:font-bold">
              Enroll
            </button>
          </Link>
        </div>
      </div>
      <div className="text-l flex flex-col">
        <div className="text-2xl font-bold">Course Content</div>
        <div className="flex flex-row gap-2">
          {course.Course_Subtitle[0].Subtitle_Name}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
