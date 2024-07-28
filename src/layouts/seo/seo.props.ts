import { PropsWithChildren } from "react";

export interface SeoLayoutProps extends PropsWithChildren {
  author?: string;
  metaTitle?: string;
  metaKeywords?: string;
  metaDesc?: string;
  faviconPath?: string;
}
