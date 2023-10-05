import { Content, Hero, Sidebar } from "@/components";
import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";
import { MainLayout, SeoLayout } from "@/layouts";
import { BlogsService } from "@/service/blog.service";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { FC } from "react";

const Home: FC<HomePageProps> = ({ blogs, latestBlogs, categories }): JSX.Element => {
  return (
    <SeoLayout>
      <MainLayout>
        <Hero blogs={blogs.slice(0, 3)} />
        <Grid container spacing="20px" mb="20px" paddingX="15px">
          <Grid item xs={12} lg={3.5}>
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
          </Grid>
          <Grid item xs={12} lg={8.5}>
            <Content blogs={blogs} />
          </Grid>
        </Grid>
      </MainLayout>
    </SeoLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getBlogCategories();

  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface HomePageProps {
  blogs: IBlog[];
  latestBlogs: IBlog[];
  categories: IBlogCategory[];
}
