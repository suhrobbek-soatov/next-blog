import { FC } from "react";
import { SeoLayoutProps } from "./seo.props";
import Head from "next/head";
import { seoConfig } from "@/helpers/constants";
const { desc, keywords, siteAuthor, title, favicon } = seoConfig;

const SeoLayout: FC<SeoLayoutProps> = ({
  children,
  author = siteAuthor,
  metaTitle = title,
  metaKeywords = keywords,
  metaDesc = desc,
  faviconPath = favicon,
}) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="author" content={author} />
        <meta name="description" content={metaDesc} />
        <meta name="keyword" content={metaKeywords} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href={faviconPath} />
      </Head>
      {children}
    </>
  );
};

export default SeoLayout;
