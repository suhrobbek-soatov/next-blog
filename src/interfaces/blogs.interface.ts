export interface IBlog {
  id: string;
  excerpt: string;
  slug: string;
  title: string;
  image: {
    url: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  createdAt: Date;
  category: IBlogCategory;
}

export interface IBlogCategory {
  slug: string;
  label: string;
}
