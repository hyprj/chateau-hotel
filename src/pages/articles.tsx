import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Container, Heading, Text } from "@chakra-ui/react";
import { ArticlePreview } from "@features/articles/ArticlePreview";
import { API_URL, GetAllPosts, GET_ALL_POSTS } from "@graphql/queries";
import { IPostPreview } from "@shared/types";
import { NextPage } from "next";

type Props = {
  posts: IPostPreview[];
};

const Articles: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Container maxW={"container.lg"} mt="12rem" display="flex" flexDir="column">
      <Heading alignSelf="center" marginBottom="4rem">
        News from Château de Champblanc
      </Heading>
      {posts &&
        posts.map((post) => <ArticlePreview key={post.urlSlug} post={post} />)}
      {!posts && <Text>No news from the Chateau...</Text>}
    </Container>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({ uri: API_URL, cache: new InMemoryCache() });
  const { data } = await client.query<GetAllPosts>({ query: GET_ALL_POSTS });
  const posts = data.posts.data.map((post) => post.attributes);

  return {
    props: {
      posts,
    },
  };
}

export default Articles;
