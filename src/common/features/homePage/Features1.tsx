import { Flex, Container, Box, Text, Heading } from "@chakra-ui/react";
import { FadeOnView } from "@components/animations/FadeOnView";

export function Features1() {
  return (
    <FadeOnView>
      <Box bgColor="gray.800" pb="5rem" mb="5rem">
        <Container maxW="container.xl">
          <Flex
            flexDir={{ base: "column", xl: "row" }}
            justifyContent={{ xl: "space-between" }}
          >
            <Box
              width={{ xl: "45%" }}
              height={{ base: "25rem", xl: "35rem" }}
              bgImage="url(./images/restaurant-night.jpg)"
              bgPos="center"
              bgSize="cover"
              color="white"
            >
              <Box
                position="relative"
                top={{ base: "100%", lg: "1rem" }}
                transform={{ base: "translateY(-120%)", lg: "translateY(0)" }}
                left={{ base: "2rem", lg: "-2rem" }}
              >
                <Heading
                  fontWeight="700"
                  marginBottom="1rem"
                  letterSpacing=".1rem"
                >
                  Restaurant
                </Heading>
                <Text marginBottom=".6rem" maxW={"30ch"}>
                  Freshly baked baguettes, local wine combined with the best
                  chefs in the area
                </Text>
                {/* <StyledLink href="restaurant">
                  See the restaurant page
                </StyledLink> */}
              </Box>
            </Box>
            <Box
              mt="8rem"
              width={{ xl: "45%" }}
              height={{ base: "25rem", xl: "35rem" }}
              bgImage="url(./images/countryside.jpg)"
              bgPos="center"
              bgSize="cover"
              color="white"
            >
              <Box
                position="relative"
                top={{ base: "100%", lg: "1rem" }}
                transform={{ base: "translateY(-120%)", lg: "translateY(0)" }}
                left={{ base: "2rem", lg: "-2rem" }}
              >
                <Heading fontWeight="700" mb="1rem" letterSpacing=".1rem">
                  Gallery
                </Heading>
                <Text marginBottom=".6rem">
                  Amazing landscape, vintage rooms
                </Text>
                <Text textTransform="uppercase" textDecor="underline">
                  See the gallery
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </FadeOnView>
  );
}
