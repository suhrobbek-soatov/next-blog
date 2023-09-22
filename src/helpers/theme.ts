import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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
    },
    primary: {
      main: "#141414",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
