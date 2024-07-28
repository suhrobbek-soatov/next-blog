import { FC, Fragment } from "react";
import * as Mui from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/helpers/constants";
import { ISidebarProps } from "./sidebar.props";

const Sidebar: FC<ISidebarProps> = ({ latestBlogs, categories }): JSX.Element => {
  return (
    <Mui.Box height="100%">
      <Mui.Box position="sticky" top="120px">
        <Mui.Box mb="20px" sx={sidebarStyles}>
          <Mui.Typography mb="12px" variant="h5">
            Latest blogs
          </Mui.Typography>
          <Mui.Box display="flex" flexDirection="column">
            {latestBlogs.map((blog, idx) => (
              <Fragment key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                  <Mui.Box display="flex" gap={{ xs: "10px", sm: "15px", md: "20px" }} alignItems="center">
                    <Mui.Box
                      overflow="hidden"
                      flexShrink={0}
                      width="100px"
                      borderRadius="8px"
                      height="100px"
                      position="relative"
                    >
                      <Image src={blog.image.url} alt={blog.title} objectFit="cover" fill />
                    </Mui.Box>
                    <Mui.Box>
                      <Mui.Typography sx={{ fontSize: { xs: "15px", md: "16px" } }} mb="4px">
                        {blog.title}
                      </Mui.Typography>
                      <Mui.Box display="flex" gap="10px" alignItems="center">
                        <Mui.Avatar src={blog.author.avatar.url} alt={blog.author.name} />
                        <Mui.Box>
                          <Mui.Typography variant="body2">{blog.author.name}</Mui.Typography>
                          <Mui.Typography color="gray" variant="body2" component="time">
                            {format(new Date(blog.createdAt), "dd MMM, yyyy")}
                          </Mui.Typography>
                        </Mui.Box>
                      </Mui.Box>
                    </Mui.Box>
                  </Mui.Box>
                  {idx !== latestBlogs.length - 1 && <Mui.Divider sx={{ my: "10px" }} color="grey" />}
                </Link>
              </Fragment>
            ))}
          </Mui.Box>
        </Mui.Box>
        <Mui.Box sx={sidebarStyles}>
          <Mui.Typography mb="12px" variant="h5">
            Categories
          </Mui.Typography>
          <Mui.Box display="flex" flexDirection="column">
            {categories.map((category, idx) => (
              <Fragment key={category.slug}>
                <Link href={`/category/${category.slug}`}>
                  <Mui.Button sx={{ py: "16px", color: "white", width: "100%", justifyContent: "flex-start" }}>
                    {category.label}
                  </Mui.Button>
                </Link>

                {idx !== navLinks.length - 1 && <Mui.Divider color="grey" />}
              </Fragment>
            ))}
          </Mui.Box>
        </Mui.Box>
      </Mui.Box>
    </Mui.Box>
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
