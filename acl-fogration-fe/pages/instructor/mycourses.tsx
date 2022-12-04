import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
import HeaderCourse from "../../components/organisms/HeaderCourse";
import InstructorCoursesCard from "../../components/molecules/InstructorCoursesCard";
// interface Props {
//   data: {
//     song: string;
//     artist: string;
//     year: string;
//   }[];
// }

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
          <HeaderCourse/>
          <InstructorCoursesCard/>
        </div>
      </Layout>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
//   const data = [
//     {
//       song: 'The Sliding',
//       artist: 'The Beatles',
//       year: '1967',
//     },
//     {
//       song: 'Witchy Woman',
//       artist: 'The Beatles',
//       year: '1967',
//     },
//   ];

//   return {
//     props: {
//       data,
//     },
//   };
// };

export default mycourses;
