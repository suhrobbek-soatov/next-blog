import { IBlogCategory } from "@/interfaces/blogs.interface";
import { MainLayout, SeoLayout } from "@/layouts";
import { BlogsService } from "@/service/blog.service";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

const CategoryPage: FC<CategoryPageProps> = ({ categories }): JSX.Element => {
  const router = useRouter();

  return (
    <SeoLayout metaTitle="Blog | Categories">
      <MainLayout>
        <Box
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
          <Typography variant="h3" mb="30px" sx={{ textAlign: "center" }}>
            All Categories
          </Typography>
          <ButtonGroup
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            variant="contained"
            aria-label="button group"
          >
            {categories.map(category => (
              <Button key={category.slug} onClick={() => router.push(`/category/${category.slug}`)}>
                # {category.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </MainLayout>
    </SeoLayout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async () => {
  const categories = await BlogsService.getBlogCategories();

  return {
    props: {
      categories,
    },
  };
};

interface CategoryPageProps {
  categories: IBlogCategory[];
}
