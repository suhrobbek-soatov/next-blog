import { FC } from "react";
import { MainLayoutProps } from "./main.props";
import { Footer, Navbar } from "@/components";
import { Box } from "@mui/material";

const MainLayout: FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight="90vh">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
