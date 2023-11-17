import { IBlog, IBlogCategory } from "@/interfaces/blogs.interface";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetAllBlogs {
        blogs {
          id
          excerpt
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            html
            text
          }
        }
      }
    `;

    const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
    return blogs;
  },
  async getLatestBlogs() {
    const query = gql`
      query GetLatestBlog {
        blogs(last: 2) {
          id
          excerpt
          slug
          title
          createdAt
          image {
            url
          }
          description {
            html
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
    return blogs;
  },
  async getBlogCategories() {
    const query = gql`
      query GetBlogCategories {
        categories {
          slug
          label
        }
      }
    `;

    const { categories } = await request<{ categories: IBlogCategory[] }>(
      graphqlAPI,
      query
    );
    return categories;
  },
  async getBlogDetails(slug: string) {
    const query = gql`
      query GetBlogDetails($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          excerpt
          slug
          title
          createdAt
          image {
            url
          }
          description {
            html
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, {
      slug,
    });
    return blog;
  },
  async getCategoryBlogs(category: string) {
    const query = gql`
      query GetCategoryBlogs($category: String) {
        blogs(where: { category: { slug: $category } }) {
          id
          excerpt
          slug
          title
          createdAt
          image {
            url
          }
          description {
            html
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
      category,
    });
    return blogs;
  },
};
