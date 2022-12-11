import React from 'react'
import Layout from '../../components/templates/Layout'
import InstructorProfile from '../../components/molecules/InstructorProfile';
import IndividualUserProfile from '../../components/molecules/IndividualUserProfile';

const person = {
  _id: {
    $oid: "636820e12887948f062b493e",
  },
  User_ID: 4,
  User_Name: "Pasha",
  User_Email: "Pasha@gmail.com",
  User_Password: "1234",
  User_Role: "Instructor",
  User_Country: "Egypt",
  User_City: "Berlin",
  User_Address: "ALexanderplatz",
  User_Courses: [
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
  ],
};
const profile = () => {
  return (
    <div>
        <Layout>
        <div>
            {/* <InstructorProfile user={person} /> */}
            <IndividualUserProfile user={person}/>
        </div>
      </Layout>
    </div>
  )
}

export default profile