import { FC } from "react";
import { format } from "date-fns";
import { Instagram, Telegram, YouTube } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const Footer: FC = (): JSX.Element => {
  return (
    <Box
      component="footer"
      color="white"
      bgcolor="#141414"
      borderTop="1px solid gray"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        p: "20px",
      }}
    >
      <Typography>©️ {format(new Date(), "yyyy")} BLOG. All Right Reserved!</Typography>
      <ButtonGroup disableElevation variant="contained" aria-label="socials">
        <Button href="#">
          <Telegram />
        </Button>
        <Button href="#">
          <Instagram />
        </Button>
        <Button href="#">
          <YouTube />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
