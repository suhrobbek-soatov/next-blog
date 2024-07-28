import { FC } from "react";
import * as Mui from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { IBlogCategory } from "@/interfaces/blogs.interface";
import { BlogsService } from "@/service/blog.service";
import { MainLayout, SeoLayout } from "@/layouts";

const CategoryPage: FC<CategoryPageProps> = ({ categories }): JSX.Element => {
  const router = useRouter();

  return (
    <SeoLayout metaTitle="Blog | Categories">
      <MainLayout>
        <Mui.Box
          mt="40px"
          mb="20px"
          p="10px"
          mx="auto"
          width={{ xs: "100%", md: "85%" }}
          height={{ xs: "30vh", md: "50vh" }}
          bgcolor="rgba(0,0,0,0.3)"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Mui.Typography variant="h3" mb="30px" sx={{ textAlign: "center" }}>
            All Categories
          </Mui.Typography>
          <Mui.ButtonGroup
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            variant="contained"
            aria-label="button group"
          >
            {categories.map(category => (
              <Mui.Button key={category.slug} onClick={() => router.push(`/category/${category.slug}`)}>
                # {category.label}
              </Mui.Button>
            ))}
          </Mui.ButtonGroup>
        </Mui.Box>
      </MainLayout>
    </SeoLayout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async () => {
  const categories = await BlogsService.getBlogCategories();

  return {
    props: { categories },
  };
};

interface CategoryPageProps {
  categories: IBlogCategory[];
}
