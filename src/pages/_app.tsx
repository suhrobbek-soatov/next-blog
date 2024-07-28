import { useEffect } from "react";
import NProgress from "nprogress";
import { Router } from "next/router";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";

import theme from "@/helpers/theme";
import createEmotionCache from "@/helpers/createEmotionCache";

import "@/styles/globals.css";
import "nprogress/nprogress.css";
import "react-multi-carousel/lib/styles.css";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
