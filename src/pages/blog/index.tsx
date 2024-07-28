import { FC } from "react";
import { GetServerSideProps } from "next";
import { Container } from "@mui/material";

import { BlogsService } from "@/service/blog.service";
import { IBlog } from "@/interfaces/blogs.interface";

import { MainLayout, SeoLayout } from "@/layouts";
import { Content } from "@/components";

const BlogPage: FC<BlogPageProps> = ({ blogs }): JSX.Element => {
  return (
    <SeoLayout metaTitle="Blog | All Blogs">
      <MainLayout>
        <Container sx={{ my: "20px" }} maxWidth="xl">
          <Content blogs={blogs} />
        </Container>
      </MainLayout>
    </SeoLayout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: { blogs },
  };
};

interface BlogPageProps {
  blogs: IBlog[];
}
