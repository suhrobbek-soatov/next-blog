import "@/styles/globals.css";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import createEmotionCache from "@/helpers/createEmotionCache";
import Head from "next/head";
import theme from "@/helpers/theme";
import { CssBaseline } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}
