import Link from "next/link";
import { chakra, Heading, Text } from "@chakra-ui/react";

import { IPostPreview } from "@shared/types";

type Props = {
  post: IPostPreview;
};

export const ArticlePreview = ({ post }: Props) => {
  return (
    <Link href={`article/${post.urlSlug}`}>
      <chakra.article
        marginBottom="1rem"
        className="article"
        _hover={{ cursor: "pointer" }}
      >
        <Heading>{post.title}</Heading>
        <Text color="gray.700" paddingTop="1.6rem">
          {post.description}
        </Text>
      </chakra.article>
    </Link>
  );
};
