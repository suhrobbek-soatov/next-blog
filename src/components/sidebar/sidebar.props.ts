import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";

export interface ISidebarProps {
  latestBlogs: IBlog[];
  categories: IBlogCategory[];
}
