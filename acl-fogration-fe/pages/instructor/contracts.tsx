import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/templates/Layout";
const contracts: NextPage = () => {
  return (
    <div className="bg-bc h-screen">
      <Head>
        <title>Contracts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div></div>
      </Layout>
    </div>
  );
};
export default contracts;
