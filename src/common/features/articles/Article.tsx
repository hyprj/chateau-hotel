import { chakra, Heading, Text } from "@chakra-ui/react";
import { IPost } from "@shared/types";
// import { replaceAllDashesWithDots } from '../../utils/utils';

type Props = {
  post: IPost;
};

export const Article = ({ post }: Props) => {
  return (
    <chakra.article marginBottom="1rem" className="article">
      <Heading>{post.title}</Heading>
      {/* <Text color="gray.500">
        {replaceAllDashesWithDots(article.data.attributes.creationDate)}
      </Text> */}
      {/* <Text color="gray.700" paddingTop="1.6rem"> */}
      {/* {article.data.attributes.content} */}
      {/* <ReactMarkdown
        components={ChakraUIRenderer()}
        // children={article.data.attributes.content}
        skipHtml
      > */}
      {/* {article.data.attributes.content} */}
      {/* </ReactMarkdown> */}
      {/* </Text> */}
    </chakra.article>
  );
};
