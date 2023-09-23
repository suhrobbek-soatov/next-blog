import { data } from "@/helpers/constants";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { FC } from "react";

const Content: FC = (): JSX.Element => {
  return (
    <Box color="white">
      {data.map((item, idx) => (
        <Box
          component="article"
          key={item.image}
          {...(idx !== data.length - 1 && { mb: "20px" })}
          bgcolor="rgba(0, 0, 0, 0.5)"
          p="20px"
          borderRadius="8px"
          boxShadow="0 8px 16px rgba(255, 255, 255, 0.2)"
        >
          <Box mb="30px" position="relative" width="100%" height="50vh">
            <Image src={item.image} alt={item.title} style={{ borderRadius: "10px" }} fill objectFit="cover" />
          </Box>
          <Typography sx={{ fontSize: { xs: "20px", sm: "23px", md: "29px", lg: "34px" } }} mb="12px">
            {item.title}
          </Typography>
          <Typography color="gray" variant="body1">
            {item.exerpt}
          </Typography>
          <Divider color="gray" sx={{ my: "14px" }} />
          <Box display="flex" gap="10px" alignItems="center">
            <Avatar src={item.author.avatar} alt={item.author.name} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Typography variant="body2" color="gray" component="time">
                {format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
