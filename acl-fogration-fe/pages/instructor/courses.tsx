import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import InstructorCoursesCard from "../../components/molecules/InstructorCoursesCard";

const coursesArray = [
  {
    _id: {
      $oid: "636820e12887948f062b493e",
    },
    Course_ID: 4,
    Course_Title: "Computer ",
    Course_Subject: "Computer Science",
    Course_Description: "Data Structures and Algorithms",
    Course_Price: 0,
    Course_Rating: 5,
    Course_Instructor: "Malak",
    Course_Hours: 5,
    Course_Country: "Egypt",
    Course_Discount: 10,
    Course_Discount_Duration: 5,
    Course_Subtitle: ["S1", "S2"],
    Course_Trainee: ["Ahmed"],
    Course_Review: ["Very Good Course"],
    Course_Rate: ["null"],
    Course_Exam: ["null"],
  },
  {
    _id: {
      $oid: "636820e12887948f062b493e",
    },
    Course_ID: 4,
    Course_Title: "Fogration",
    Course_Subject: "Computer Science",
    Course_Description: "Data Structures and Algorithms",
    Course_Price: 0,
    Course_Rating: 5,
    Course_Instructor: "Malak",
    Course_Hours: 5,
    Course_Country: "Egypt",
    Course_Discount: 10,
    Course_Discount_Duration: 5,
    Course_Subtitle: ["S1", "S2"],
    Course_Trainee: ["Ahmed"],
    Course_Review: ["Very Good Course"],
    Course_Rate: ["null"],
    Course_Exam: ["null"],
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
    Course_Subtitle: ["S1", "S2"],
    Course_Trainee: ["Ahmed"],
    Course_Review: ["Very Good Course"],
    Course_Rate: ["null"],
    Course_Exam: ["null"],
  },
];

const course = {
  _id: {
    $oid: "636820e12887948f062b493e",
  },
  Course_ID: 4,
  Course_Title: "Data structures & Algorithms",
  Course_Subject: "Computer Science",
  Course_Description:
    "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
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
        {
          Video_ID: 1,
          Video_Link:
            "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
          Video_Subtitle: "S1",
          Video_Description: "Introduction",
          Video_Length: 10,
        },
        {
          Video_ID: 1,
          Video_Link:
            "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
          Video_Subtitle: "S1",
          Video_Description: "Introduction",
          Video_Length: 10,
        },
        {
          Video_ID: 1,
          Video_Link:
            "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
          Video_Subtitle: "S1",
          Video_Description: "Introduction",
          Video_Length: 10,
        },
        {
          Video_ID: 1,
          Video_Link:
            "https://www.youtube.com/watch?v=Q8TXgCzxEnw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
          Video_Subtitle: "S1",
          Video_Description: "Introduction",
          Video_Length: 10,
        },
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
    {
      Exam_ID: "1",
      Exam_Question_ID: [
        {
          Question_ID: "1",
          Question_Name: "Ex 1",
          Question_choices: ["a", "b", "c", "d"],
          Question_Correct_Answers: "a b d c",
          Question_Grade: "A",
        },
      ],
      Exam_Grade: "A",
      Exam_Instructor_ID: "123",
      Exam_Course_ID: "4",
    },
  ],
  Course_What_You_Will_Learn: [
    "Learn how to use the most popular data structures",
    "Learn how to use the most popular algorithms",
    "Learn how to use the most popular data structures",
  ],
};
const courses: NextPage = () => {
  return (
    <div className="bg-bc h-screen">
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <InstructorCoursesCard courses={coursesArray}/>
        </div>
      </Layout>
    </div>
  );
};

export default courses;
