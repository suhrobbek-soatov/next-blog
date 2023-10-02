import { data, navLinks } from "@/helpers/constants";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment } from "react";
import { ISidebarProps } from "./sidebar.props";

const Sidebar: FC<ISidebarProps> = ({ latestBlogs, categories }): JSX.Element => {
  return (
    <Box height="100%">
      <Box position="sticky" top="120px">
        <Box mb="20px" sx={sidebarStyles}>
          <Typography mb="12px" variant="h5">
            Latest blogs
          </Typography>
          <Box display="flex" flexDirection="column">
            {latestBlogs.map((blog, idx) => (
              <Fragment key={blog.id}>
                <Link href="#">
                  <Box display="flex" gap={{ xs: "10px", sm: "15px", md: "20px" }} alignItems="center">
                    <Box
                      overflow="hidden"
                      flexShrink={0}
                      width="100px"
                      borderRadius="8px"
                      height="100px"
                      position="relative"
                    >
                      <Image src={blog.image.url} alt={blog.title} objectFit="cover" fill />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: { xs: "15px", md: "16px" } }} mb="4px">
                        {blog.title}
                      </Typography>
                      <Box display="flex" gap="10px" alignItems="center">
                        <Avatar src={blog.author.avatar.url} alt={blog.author.name} />
                        <Box>
                          <Typography variant="body2">{blog.author.name}</Typography>
                          <Typography color="gray" variant="body2" component="time">
                            {format(new Date(), "dd MMM, yyyy")}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {idx !== data.length - 1 && <Divider sx={{ my: "10px" }} color="grey" />}
                </Link>
              </Fragment>
            ))}
          </Box>
        </Box>
        <Box sx={sidebarStyles}>
          <Typography mb="12px" variant="h5">
            Categories
          </Typography>
          <Box display="flex" flexDirection="column">
            {categories.map((category, idx) => (
              <Fragment key={category.slug}>
                <Link href={category.slug}>
                  <Button sx={{ py: "16px", color: "white", width: "100%", justifyContent: "flex-start" }}>
                    {category.label}
                  </Button>
                </Link>

                {idx !== navLinks.length - 1 && <Divider color="grey" />}
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const sidebarStyles = {
  p: "20px",
  color: "white",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
  border: "1px solid gray",
  borderRadius: "8px",
};

export default Sidebar;
