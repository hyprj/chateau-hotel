import { gql } from "@apollo/client";
import { IPostSlug, IPostPreview, IPost } from "@shared/types";

export const API_URL =
  process.env.STRAPI_PUBLIC_API_URL || "http://localhost:1337/graphql";

export const GET_ALL_SLUGS = gql`
  query {
    posts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

export type GetAllSlugs = {
  posts: {
    data: { attributes: IPostSlug }[];
  };
};

export const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        attributes {
          urlSlug
          title
          description
        }
      }
    }
  }
`;

export type GetAllPosts = {
  posts: {
    data: { attributes: IPostPreview }[];
  };
};

export const GET_POST = gql`
  query ($slugUrl: String!) {
    posts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          description
          content
        }
      }
    }
  }
`;

export type GetPost = {
  posts: {
    data: { attributes: IPost }[];
  };
};
