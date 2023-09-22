import { Content, Hero, Sidebar } from "@/components";
import Layout from "@/layouts/layout";
import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | Home</title>
      </Head>
      <Hero />
      <Box display="flex" gap="20px">
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default Home;
