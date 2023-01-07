import { InMemoryCache } from "@apollo/client/cache";
import { ApolloClient } from "@apollo/client/core";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, chakra, Text } from "@chakra-ui/react";
import { Parallax } from "@components/animations/Parallax";
import { ArticlesPreview } from "@features/articles/ArticlesPreview";
import { Features1 } from "@features/homePage/Features1";
import { HomeAbout } from "@features/homePage/HomeAbout";
import { WelcomeHeading } from "@features/homePage/WelcomeHeading";
import { IPostPreview } from "@shared/types";
import { API_URL, GetAllPosts, GET_ALL_POSTS } from "../graphql/queries";

interface Props {
  posts: IPostPreview[];
}

export default function Home({ posts }: Props) {
  return (
    <main>
      <chakra.section textAlign="center">
        <Box
          bgImage="url(./images/chateau-entrance-darken.jpg)"
          height={["90vmax", "70vmax"]}
          bgPos="center"
          bgSize={"cover"}
          position="relative"
        >
          <Parallax speed={0.4}>
            <WelcomeHeading />
          </Parallax>
          <Parallax speed={0.1}>
            <Text
              fontSize="1.4rem"
              color="white"
              fontWeight="light"
              position="relative"
              top="10rem"
            >
              Checkout attractions <ArrowDownIcon />
            </Text>
          </Parallax>
        </Box>
      </chakra.section>
      <chakra.section></chakra.section>
      <ArticlesPreview posts={posts} />
      <HomeAbout />
      <Features1 />
    </main>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query<GetAllPosts>({ query: GET_ALL_POSTS });
  const posts = data.posts.data.map((post) => post.attributes);

  return {
    props: {
      posts,
    },
  };
}
