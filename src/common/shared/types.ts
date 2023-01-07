export type IPost = {
  content: string;
  createdAt: string;
  description: string;
  publishedAt: string;
  title: string;
  updatedAt: string;
  urlSlug: string;
};

export type IPostPreview = Pick<IPost, "title" | "description" | "urlSlug">;

export type IPostSlug = Pick<IPost, "urlSlug">;

export type PotentialDate = Date | null;
