import { Sidebar } from "@/components";
import { calcEstimatedReadTime } from "@/helpers/time";
import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";
import Layout from "@/layouts/layout";
import { BlogsService } from "@/service/blog.service";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { FC } from "react";

const BlogPage: FC<BlogPageProps> = ({ blog, latestBlogs, categories }): JSX.Element => {
  return (
    <Layout>
      <Grid mt="1px" container spacing="20px" mb="20px" paddingX="15px">
        <Grid item xs={12} lg={8.5}>
          <Box
            bgcolor="rgba(0, 0, 0, 0.3)"
            color="white"
            boxShadow="0 8px 16px rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            p="20px"
          >
            <Box position="relative" width="100%" height="50vh" mb="25px">
              <Image src={blog.image.url} alt={blog.title} style={{ borderRadius: "10px" }} fill objectFit="cover" />
            </Box>
            <Box display="flex" mb="20px" gap="20px" alignItems="center">
              <Avatar src={blog.author.avatar.url} alt={blog.author.name} />
              <Box>
                <Typography>{blog.author.name}</Typography>
                <Typography variant="body2" color="gray" component="time">
                  {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                  {calcEstimatedReadTime(blog.description.text)} min read
                </Typography>
              </Box>
            </Box>
            <Typography variant="h4" mb="15px">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="gray" sx={{ fontWeight: 400 }}>
              {blog.excerpt}
            </Typography>
            <Divider color="gray" sx={{ my: "14px" }} />
            <div style={{ opacity: "0.8" }} dangerouslySetInnerHTML={{ __html: blog.description.html }}></div>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3.5}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ query }) => {
  const blog = await BlogsService.getBlogDetails(query.slug as string);
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getBlogCategories();

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface BlogPageProps {
  blog: IBlog;
  latestBlogs: IBlog[];
  categories: IBlogCategory[];
}
