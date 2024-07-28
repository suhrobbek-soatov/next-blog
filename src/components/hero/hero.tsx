import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import { Avatar, Box, Typography } from "@mui/material";

import { IHeroProps } from "./hero.props";
import { calcEstimatedReadTime } from "@/helpers/time";

const Hero: FC<IHeroProps> = ({ blogs }): JSX.Element => {
  const router = useRouter();

  const responsive = {
    mobile: {
      breakpoint: { max: 3600, min: 0 },
      items: 1,
    },
  };

  return (
    <Box width="100%">
      <Carousel responsive={responsive}>
        {blogs.map(blog => (
          <Box
            onClick={() => router.push(`/blog/${blog.slug}`)}
            key={blog.id}
            sx={{
              width: "100%",
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              mb: "20px",
              cursor: "pointer",
              height: { xs: "50vh", sm: "60vh", md: "70vh" },
              position: "relative",
            }}
          >
            <Image src={blog.image.url} alt={blog.title} priority={true} fill objectFit="cover" />
            <Box position="absolute" width="100%" sx={{ inset: 0, zIndex: 1, bgcolor: "rgba(0, 0, 0, 0.4)" }}>
              <Box
                color="white"
                px={{ xs: "10px", sm: "20px", md: "30px", lg: "50px" }}
                fontWeight={400}
                position="absolute"
                top="50%"
                sx={{ transform: "translateY(-50%)" }}
              >
                <Typography
                  sx={{ lineHeight: 1.2, fontSize: { xs: "28px", sm: "36px", md: "42px", lg: "48px" } }}
                  mb="5px"
                >
                  {blog.title}
                </Typography>
                <Typography
                  color="gray"
                  sx={{ lineHeight: 1.2, fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" } }}
                  mb="10px"
                >
                  {blog.excerpt}
                </Typography>
                <Box justifyContent={{ xs: "center", md: "left" }} display="flex" gap="10px" alignItems="center">
                  <Avatar src={blog.author.avatar.url} alt={blog.author.name} />
                  <Box>
                    <Typography>{blog.author.name}</Typography>
                    <Typography variant="body2" color="gray" component="time">
                      {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                      {calcEstimatedReadTime(blog.description.text)} min read
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
