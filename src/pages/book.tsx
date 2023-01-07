import { NextPage } from "next";

import { Box, Container, Heading, Flex } from "@chakra-ui/react";
import { Parallax } from "@components/animations/Parallax";
import { FadeOnView } from "@components/animations/FadeOnView";
import { Booking } from "@features/booking/Booking";

const BookPage: NextPage = () => {
  return (
    <Box>
      <Box>
        <Flex
          height="100vh"
          bgSize="cover"
          bgPos="center"
          bgImage="url(./images/palace.jpg)"
          justify="center"
          alignItems="center"
          color="white"
          textAlign="center"
        >
          <Parallax speed={0.1}>
            <FadeOnView>
              <Heading fontSize="7xl" opacity="0.9">
                Book your stay
              </Heading>
            </FadeOnView>
          </Parallax>
        </Flex>
      </Box>
      <Container maxW="container.lg" marginBottom="20rem">
        <FadeOnView>
          <Booking />
        </FadeOnView>
      </Container>
    </Box>
  );
};

export default BookPage;
