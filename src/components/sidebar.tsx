import { data, navLinks } from "@/helpers/constants";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment } from "react";

const Sidebar: FC = (): JSX.Element => {
  return (
    <Box height="100%">
      <Box position="sticky" top="90px">
        <Box mb="20px" sx={sidebarStyles}>
          <Typography mb="12px" variant="h5">
            Latest blog
          </Typography>
          <Box display="flex" flexDirection="column">
            {data.map((item, idx) => (
              <Fragment key={item.image}>
                <Link href="#">
                  <Box display="flex" gap="20px" alignItems="center">
                    <Box
                      overflow="hidden"
                      flexShrink={0}
                      width="100px"
                      borderRadius="8px"
                      height="100px"
                      position="relative"
                    >
                      <Image src={item.image} alt={item.title} objectFit="cover" fill />
                    </Box>
                    <Box>
                      <Typography mb="4px">{item.title}</Typography>
                      <Box justifyContent={{ xs: "center", md: "left" }} display="flex" gap="10px" alignItems="center">
                        <Avatar src={item.author.avatar} alt={item.author.name} />
                        <Box>
                          <Typography variant="body2">{item.author.name}</Typography>
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
            Category
          </Typography>
          <Box display="flex" flexDirection="column">
            {navLinks.map((link, idx) => (
              <Fragment key={link.route}>
                <Link href={link.route}>
                  <Button sx={{ py: "16px", color: "white", width: "100%", justifyContent: "flex-start" }}>
                    {link.text}
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
