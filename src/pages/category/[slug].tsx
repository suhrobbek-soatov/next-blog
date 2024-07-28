import { FC } from "react";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";

import { BlogsService } from "@/service/blog.service";
import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";

import { MainLayout, SeoLayout } from "@/layouts";
import { Content, Sidebar } from "@/components";

const CategoryBlogs: FC<CategoryPageProps> = ({ category, blogs, latestBlogs, categories }): JSX.Element => {
  return (
    <SeoLayout metaTitle={`Blog | Blogs ${category}`}>
      <MainLayout>
        <Grid mt="1px" container spacing="20px" mb="20px" paddingX="15px">
          <Grid item xs={12} lg={8.5}>
            <Content blogs={blogs} />
          </Grid>
          <Grid item xs={12} lg={3.5}>
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
          </Grid>
        </Grid>
      </MainLayout>
    </SeoLayout>
  );
};

export default CategoryBlogs;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async ({ query }) => {
  const category = query.slug as string;

  const [blogs, latestBlogs, categories] = await Promise.all([
    BlogsService.getCategoryBlogs(category),
    BlogsService.getLatestBlogs(),
    BlogsService.getBlogCategories(),
  ]);

  return {
    props: { latestBlogs, blogs, categories, category },
  };
};

interface CategoryPageProps {
  blogs: IBlog[];
  categories: IBlogCategory[];
  latestBlogs: IBlog[];
  category: string;
}
