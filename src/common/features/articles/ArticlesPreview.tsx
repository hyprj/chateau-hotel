import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { IPostPreview } from "@shared/types";
// import { replaceAllDashesWithDots } from 'src/utils/utils';
import { FadeOnView } from "../../components/animations/FadeOnView";

type Props = { posts: IPostPreview[] };

export function ArticlesPreview({ posts }: Props) {
  return (
    <FadeOnView>
      <Container
        display="flex"
        flexDir="column"
        maxW={"container.lg"}
        pb="5rem"
      >
        <Heading alignSelf="center">Latest news</Heading>
        {posts.length === 0 && <Text>No news from the Château...</Text>}
        {posts &&
          posts.map((post) => (
            <Box key={post.urlSlug} marginBlock="2rem">
              <Heading>{post.title}</Heading>
              {/* <Text>
                {replaceAllDashesWithDots(article.attributes.creationDate)}
              </Text> */}
              <Text paddingTop="1.6rem">{post.description}</Text>
            </Box>
          ))}
      </Container>
    </FadeOnView>
  );
}
