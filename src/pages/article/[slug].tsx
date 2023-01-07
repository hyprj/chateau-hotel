import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Article } from "@features/articles/Article";
import {
  API_URL,
  GetAllSlugs,
  GetPost,
  GET_ALL_SLUGS,
  GET_POST,
} from "@graphql/queries";
import { IPost } from "@shared/types";
import { GetStaticProps } from "next";

const client = new ApolloClient({ uri: API_URL, cache: new InMemoryCache() });

interface Props {
  post: IPost;
}

export default function Post({ post }: Props) {
  return (
    <div>
      <h2>{post.title}</h2>
      {/* <p>{post.content}</p> */}
      <Article post={post} />
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query<GetAllSlugs>({
    query: GET_ALL_SLUGS,
  });

  const paths = data.posts.data.map((post) => ({
    params: { slug: post.attributes.urlSlug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error("Couldnt fetch the data");
  const { data } = await client.query<GetPost>({
    query: GET_POST,
    variables: { slugUrl: params.slug },
  });

  const attr = data.posts.data[0].attributes;

  return {
    props: {
      post: {
        title: attr.title,
        content: attr.content,
      },
    },
  };
};
