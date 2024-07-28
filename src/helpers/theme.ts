import { Inter } from "next/font/google";
import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: grey[900],
      paper: grey[900],
    },
    primary: {
      main: grey[900],
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
