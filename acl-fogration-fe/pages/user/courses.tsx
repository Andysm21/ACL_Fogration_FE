<<<<<<< HEAD
import React from 'react'
import CourseCard from '../../components/molecules/CourseCard'
import Layout from '../../components/templates/Layout'
=======
import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
// interface Props {
//   data: {
//     song: string;
//     artist: string;
//     year: string;
//   }[];
// }
>>>>>>> main

const courses: NextPage = () => {
  return (
<<<<<<< HEAD
    <div>
      <Layout>
        <CourseCard />
      </Layout>
    </div>
  );
}
=======
    <div className={""}>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
>>>>>>> main

      <Layout>
        <div></div>
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

export default courses;
