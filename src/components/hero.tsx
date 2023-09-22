import { Avatar, Box, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 3600, min: 0 },
      items: 1,
    },
  };

  return (
    <Box width="100%">
      <Carousel responsive={responsive}>
        {data.map(item => (
          <Box
            textAlign={{ xs: "center", md: "left" }}
            display="flex"
            width="100%"
            height={{ xs: "50vh", sm: "60vh", md: "70vh" }}
            position="relative"
            key={item.image}
          >
            <Image src={item.image} alt={item.title} fill objectFit="cover" />
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
                  {item.title}
                </Typography>
                <Typography
                  sx={{ lineHeight: 1.2, fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" } }}
                  mb="10px"
                >
                  {item.exerpt}
                </Typography>
                <Box justifyContent={{ xs: "center", md: "left" }} display="flex" gap="10px" alignItems="center">
                  <Avatar src={item.author.avatar} alt={item.author.name} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box component="time">{format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read</Box>
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

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt: "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Suhrobbek Soatov",
      avatar: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Suhrobbek Soatov",
      avatar: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];

export default Hero;
