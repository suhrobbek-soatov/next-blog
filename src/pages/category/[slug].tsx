import { Content, Sidebar } from "@/components";
import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";
import Layout from "@/layouts/layout";
import { BlogsService } from "@/service/blog.service";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

const CategoryBlogs: FC<CategoryPageProps> = ({ category, blogs, latestBlogs, categories }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Blog | Blogs {category}</title>
      </Head>
      <Grid mt="1px" container spacing="20px" mb="20px" paddingX="15px">
        <Grid item xs={12} lg={8.5}>
          <Content blogs={blogs} />
        </Grid>
        <Grid item xs={12} lg={3.5}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CategoryBlogs;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async ({ query }) => {
  const category = query.slug as string;
  const blogs = await BlogsService.getCategoryBlogs(category);
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getBlogCategories();

  return {
    props: {
      latestBlogs,
      blogs,
      categories,
      category,
    },
  };
};

interface CategoryPageProps {
  blogs: IBlog[];
  categories: IBlogCategory[];
  latestBlogs: IBlog[];
  category: string;
}
