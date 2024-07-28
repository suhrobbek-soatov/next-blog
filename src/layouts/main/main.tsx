import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

import { Footer, Navbar } from "@/components";

const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight="90vh">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
