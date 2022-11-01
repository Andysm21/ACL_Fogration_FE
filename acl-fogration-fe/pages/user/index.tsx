import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
interface Props {
  data: {
    song: string;
    artist: string;
    year: string;
  }[];
}

const home: NextPage<Props> = ({ data }) => {
  return (
    <div className={""}>

      <Layout>
        <div>
          hello 
        </div>
      </Layout>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
//   const data = [
//     {
//       song: "The Sliding",
//       artist: "The Beatles",
//       year: "1967",
//     },
//     {
//       song: "Witchy Woman",
//       artist: "The Beatles",
//       year: "1967",
//     },
//   ];

//   return {
//     props: {
//       data,
//     },
//   };
// };


export default home;
