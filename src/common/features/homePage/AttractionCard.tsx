import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";

type Props = {
  isReversed: boolean;
  heading: string;
  description: string;
  imageFileName: string;
  imageAlt: string;
};

export const AttractionCard = ({
  isReversed,
  heading,
  description,
  imageFileName,
  imageAlt,
}: Props) => {
  const flexDirOnLgScreen = isReversed ? "row-reverse" : "row";
  return (
    <Flex flexDir={{ base: "column", lg: flexDirOnLgScreen }} align="center">
      <Box flexBasis="50%" marginInline="3rem" mb="1rem">
        <Heading as="h4" mb="2rem" fontSize="1.6rem">
          {heading}
        </Heading>
        <Text textAlign="justify">{description}</Text>
      </Box>
      <Box flexBasis="50%" position="relative" minWidth="8rem">
        <Image
          src={`/images/${imageFileName}`}
          alt={imageAlt}
          bgPos="center"
          bgSize="cover"
        />
      </Box>
    </Flex>
  );
};
