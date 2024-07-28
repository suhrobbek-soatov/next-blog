import { FC } from "react";
import Image from "next/image";
import { format } from "date-fns";
import * as Mui from "@mui/material";
import parser from "html-react-parser";
import { GetServerSideProps } from "next";

import { BlogsService } from "@/service/blog.service";
import { calcEstimatedReadTime } from "@/helpers/time";
import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";

import { Sidebar } from "@/components";
import { MainLayout, SeoLayout } from "@/layouts";

const BlogPage: FC<BlogPageProps> = ({ blog, latestBlogs, categories }): JSX.Element => {
  return (
    <SeoLayout metaTitle={`Blog | ${blog.title}`}>
      <MainLayout>
        <Mui.Grid mt="1px" container spacing="20px" mb="20px" paddingX="15px">
          <Mui.Grid item xs={12} lg={8.5}>
            <Mui.Box
              bgcolor="rgba(0, 0, 0, 0.3)"
              color="white"
              boxShadow="0 8px 16px rgba(255, 255, 255, 0.2)"
              borderRadius="8px"
              p="20px"
            >
              <Mui.Box position="relative" width="100%" height="50vh" mb="25px">
                <Image src={blog.image.url} alt={blog.title} style={{ borderRadius: "10px" }} fill objectFit="cover" />
              </Mui.Box>
              <Mui.Box display="flex" mb="20px" gap="20px" alignItems="center">
                <Mui.Avatar src={blog.author.avatar.url} alt={blog.author.name} />
                <Mui.Box>
                  <Mui.Typography>{blog.author.name}</Mui.Typography>
                  <Mui.Typography variant="body2" color="gray" component="time">
                    {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                    {calcEstimatedReadTime(blog.description.text)} min read
                  </Mui.Typography>
                </Mui.Box>
              </Mui.Box>
              <Mui.Typography variant="h4" mb="15px">
                {blog.title}
              </Mui.Typography>
              <Mui.Typography variant="body2" color="gray" sx={{ fontWeight: 400 }}>
                {blog.excerpt}
              </Mui.Typography>
              <Mui.Divider color="gray" sx={{ my: "14px" }} />
              <div style={{ opacity: "0.8" }}>{parser(blog.description.html)}</div>
            </Mui.Box>
          </Mui.Grid>
          <Mui.Grid item xs={12} lg={3.5}>
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
          </Mui.Grid>
        </Mui.Grid>
      </MainLayout>
    </SeoLayout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ query }) => {
  const [blog, latestBlogs, categories] = await Promise.all([
    BlogsService.getBlogDetails(query.slug as string),
    BlogsService.getLatestBlogs(),
    BlogsService.getBlogCategories(),
  ]);

  return {
    props: { blog, latestBlogs, categories },
  };
};

interface BlogPageProps {
  blog: IBlog;
  latestBlogs: IBlog[];
  categories: IBlogCategory[];
}
