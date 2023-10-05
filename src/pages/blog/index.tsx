import { Content } from "@/components";
import { IBlog } from "@/interfaces/blogs.interface";
import { MainLayout, SeoLayout } from "@/layouts";
import { BlogsService } from "@/service/blog.service";
import { Container } from "@mui/material";
import { GetServerSideProps } from "next";
import { FC } from "react";

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
    props: {
      blogs,
    },
  };
};

interface BlogPageProps {
  blogs: IBlog[];
}
