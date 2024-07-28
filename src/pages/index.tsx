import { FC } from "react";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";

import { BlogsService } from "@/service/blog.service";
import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";

import { MainLayout, SeoLayout } from "@/layouts";
import { Content, Hero, Sidebar } from "@/components";

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
  const [blogs, latestBlogs, categories] = await Promise.all([
    BlogsService.getAllBlogs(),
    BlogsService.getLatestBlogs(),
    BlogsService.getBlogCategories(),
  ]);

  return {
    props: { blogs, latestBlogs, categories },
  };
};

interface HomePageProps {
  blogs: IBlog[];
  latestBlogs: IBlog[];
  categories: IBlogCategory[];
}
