import { chakra, Heading, Text } from "@chakra-ui/react";
import { IPost } from "@shared/types";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

type Props = {
  post: IPost;
};

export function Article({ post }: Props) {
  return (
    <chakra.article marginBottom="1rem" className="article">
      <Heading>{post.title}</Heading>
      {/* <Text color="gray.500">
        {replaceAllDashesWithDots(article.data.attributes.creationDate)}
      </Text> */}
      <Text color="gray.700" paddingTop="1.6rem">
        <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
          {post.content}
        </ReactMarkdown>
      </Text>
    </chakra.article>
  );
}
