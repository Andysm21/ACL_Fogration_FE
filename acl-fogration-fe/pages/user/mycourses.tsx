import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import UserMyCoursesCard from "../../components/molecules/UserMyCoursesCard";
import HeaderUserMyCourses from "../../components/organisms/HeaderUserMyCourses";

const courses = [
  {
    id: "1",
    name: "CSEN702",
    description: "This is a course",
    instructor: "Ahmed",
    totalHours: 6,
    price: 40,
    rating: 5,
    image:
      "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0b1b0b1b0b1b0b1b0b1b0b.jpg",
    category: "CS",
    type: "Lecture",
  },
  {
    id: '2',
    name: "CSEN704",
    description: "This is a course",
    instructor: "Ahmed",
    totalHours: 8,
    price: 40,
    rating: 4,
    image:
      "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0b1b0b1b0b1b0b1b0b1b0b.jpg",
    category: "CS",
    type: "Lecture",
  },
  {
    id: '3',
    name: "CSEN703",
    description: "This is a course",
    instructor: "Ahmed",
    totalHours: 4,
    price: 40,
    rating: 1,
    image:
      "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0b1b0b1b0b1b0b1b0b1b0b.jpg",
    category: "CS",
    type: "Lecture",
  },
];

const mycourses: NextPage = () => {
  return (
    <div className="bg-bc h-screen">
      <Head>
        <title>My Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <HeaderUserMyCourses/>

          <UserMyCoursesCard/>
        </div>
      </Layout>
    </div>
  );
};

export default mycourses;
