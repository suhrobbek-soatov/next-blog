import { Content, Hero, Sidebar } from "@/components";
import Layout from "@/layouts/layout";
import { Grid } from "@mui/material";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | Home</title>
      </Head>
      <Hero />
      <Grid container spacing="20px" mb="20px" paddingX="15px">
        <Grid item xs={12} lg={3.5}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} lg={8.5}>
          <Content />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
