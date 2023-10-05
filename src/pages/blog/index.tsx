import { Content } from "@/components";
import { IBlog } from "@/interfaces/blogs.interface";
import Layout from "@/layouts/layout";
import { BlogsService } from "@/service/blog.service";
import { Container } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

const BlogPage: FC<BlogPageProps> = ({ blogs }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog | All Blogs</title>
      </Head>
      <Layout>
        <Container sx={{ my: "20px" }} maxWidth="xl">
          <Content blogs={blogs} />
        </Container>
      </Layout>
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

interface BlogPageProps {
  blogs: IBlog[];
}
