import { ReactNode } from "react";

export interface SeoLayoutProps {
  children: ReactNode;
  author?: string;
  metaTitle?: string;
  metaKeywords?: string;
  metaDesc?: string;
  faviconPath?: string;
}
