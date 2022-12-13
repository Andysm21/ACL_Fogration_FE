import React from "react";
import ViewUser from "../../components/molecules/ViewUser";
import Layout from "../../components/templates/Layout";


// const person = {
//   _id: {
//     $oid: "636880e12886948f062b493e",
//   },
//  User_ID: 4,
//   User_username: "Pasha",
//   User_Email: "Pasha@gmail.com",
//   User_Password: "1234",
//   User_FirstName:"Hana",
//   User_LastName:"Pasha",
//   User_Gender:"Female",
//   User_Country: "Egypt",
//    User_Corporate:"Benya",
  

//  User_Courses: [

//     {
//       _id: {
//         $oid: "666820e1288794o098062b493e",
//       },
//       Course_ID: 4,
//       Course_Title: "Computer Science",
//       Course_Subject: "Computer Science",
//       Course_Description: "Data Structures and Algorithms",
//       Course_Price: 0,
//       Course_Rating: 5,
//       Course_Instructor: "Malak",
//       Course_Hours: 5,
//       Course_Country: "Egypt",
//       Course_Discount: 10,
//       Course_Discount_Duration: 5,
//       Course_Subtitle: [
//         {
//           Subtitle_ID: 1,
//           Subtitle_Name: "S1",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//         {
//           Subtitle_ID: 2,
//           Subtitle_Name: "S2",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//       ],
//       Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
//       Course_Review: ["Very Good Course"],
//       Course_Rate: ["zeft"],
//       Course_Exam: [
//         { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
//       ],
//     },
//     {
//       _id: {
//         $oid: "666820e1288794o098062b493e",
//       },
//       Course_ID: 4,
//       Course_Title: "Computer Science",
//       Course_Subject: "Computer Science",
//       Course_Description: "Data Structures and Algorithms",
//       Course_Price: 0,
//       Course_Rating: 5,
//       Course_Instructor: "Malak",
//       Course_Hours: 5,
//       Course_Country: "Egypt",
//       Course_Discount: 10,
//       Course_Discount_Duration: 5,
//       Course_Subtitle: [
//         {
//           Subtitle_ID: 1,
//           Subtitle_Name: "S1",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//         {
//           Subtitle_ID: 2,
//           Subtitle_Name: "S2",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//       ],
//       Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
//       Course_Review: ["Very Good Course"],
//       Course_Rate: ["zeft"],
//       Course_Exam: [
//         { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
//       ],
//     },
//     {
//       _id: {
//         $oid: "666820e1288794o098062b493e",
//       },
//       Course_ID: 3,
//       Course_Title: "Computer Engineering",
//       Course_Subject: "Computer Science",
//       Course_Description: "Data Structures and Algorithms",
//       Course_Price: 0,
//       Course_Rating: 5,
//       Course_Instructor: "Malak",
//       Course_Hours: 5,
//       Course_Country: "Egypt",
//       Course_Discount: 10,
//       Course_Discount_Duration: 5,
//       Course_Subtitle: [
//         {
//           Subtitle_ID: 1,
//           Subtitle_Name: "S1",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//         {
//           Subtitle_ID: 2,
//           Subtitle_Name: "S2",
//           Subtitle_Course_ID: "1",
//           Subtitle_Video: [
//             {
//               Video_ID: 1,
//               Video_Link:
//                 "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
//               Video_Subtitle: "S1",
//               Video_Description: "Introduction",
//               Video_Length: 10,
//             },
//           ],
//           Subtitle_Hours: "10",
//         },
//       ],
//       Course_Trainee: [{ Trainee_ID: 1, Trainee_Name: "Ahmed" }],
//       Course_Review: ["Very Good Course"],
//       Course_Rate: [1,2,3],
//       Course_Exam: [
//         { Exam_ID: "1", Exam_Question_ID: ["1", "2"], Exam_Grade: "A" },
//       ],
//     },
//   ],

// };
const user: React.FC<{ user }> = ({ user }) => {
  return (
    <div className="bg-bc h-screen">
      <Layout>
        <ViewUser user={user} />
      </Layout>
    </div>
  );
};

export default user;
