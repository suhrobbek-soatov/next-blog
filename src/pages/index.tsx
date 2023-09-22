import { Content, Hero, Sidebar } from "@/components";
import Layout from "@/layouts/layout";
import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  const getData = async (url: string) => {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  };

  useEffect(() => {
    getData("/api/hello")
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);

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
