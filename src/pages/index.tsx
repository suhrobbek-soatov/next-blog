import { Hero } from "@/components";
import Layout from "@/layouts/layout";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | Home</title>
      </Head>
      <Hero />
    </Layout>
  );
};

export default Home;
