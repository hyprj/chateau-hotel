import {
  Box,
  Heading,
  Flex,
  Text,
  Fade,
  Container,
  Image,
  VStack,
} from "@chakra-ui/react";
import { FadeOnView } from "@components/animations/FadeOnView";
import { Parallax } from "@components/animations/Parallax";
import { NextPage } from "next";

const Restaurant: NextPage = () => {
  return (
    <Box marginTop="0rem">
      <Flex
        color="white"
        backgroundImage="url(./images/restaurant-wide.jpg)"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        height="100vh"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          paddingInline="2rem"
          flexDir="column"
          textAlign="center"
          alignItems="center"
        >
          <Parallax speed={0.1}>
            <Fade
              in={true}
              transition={{ enter: { duration: 1, ease: "easeOut" } }}
            >
              <Heading
                fontSize={{ base: "5xl", md: "7xl" }}
                marginBottom="2rem"
              >
                Restaurant
              </Heading>
            </Fade>
            <Text maxW="30rem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              dolor ex consequatur recusandae! Officiis ea enim repellat beatae
              corporis laborum. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Recusandae eos, harum delectus nobis ex velit?
            </Text>
          </Parallax>
        </Flex>
      </Flex>
      <Container maxW="container.lg">
        <FadeOnView>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            justify="center"
            marginBlock="8rem"
          >
            <Box
              flexBasis="50%"
              flexShrink="0"
              textAlign={{ base: "center", md: "left" }}
              mb="3rem"
            >
              <Heading marginBottom="2rem">Lorem, ipsum dolor.</Heading>
              <Text maxW={{ md: "80%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                vitae quo aliquid tenetur sequi ducimus vel! Aspernatur tenetur
                minima dolorem nesciunt corrupti illum saepe, eveniet distinctio
                reprehenderit reiciendis nam perferendis veniam ab quae sit
                recusandae quas voluptatibus enim mollitia odit? Dolorum
                pariatur dignissimos velit perferendis excepturi delectus
                repudiandae illo numquam. Ut rerum illum quod atque deserunt
                officia ipsa expedita rem! Ab consectetur eum, eius a veniam
                alias et totam aut ratione quaerat eligendi quas nam blanditiis
                ipsum! A doloremque omnis molestias ipsa quasi quisquam,
                expedita excepturi suscipit, nisi dignissimos temporibus dolore
                modi amet incidunt laudantium dicta voluptatibus voluptatem
                quos. Aut?
              </Text>
            </Box>
            <Box>
              <Image
                src="./images/restaurant-garden-vertical.jpg"
                alt="restaurant"
              />
            </Box>
          </Flex>
        </FadeOnView>
      </Container>
      <Box textAlign="center">
        <FadeOnView>
          <Heading marginBottom="3rem" textTransform="uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta?
          </Heading>
          <Box>
            <Box
              height="24rem"
              bgPos="center"
              bgSize="cover"
              bgRepeat="no-repeat"
              bgAttachment={{ lg: "fixed" }}
              bgImage="url(./images/2.jpg)"
            />
          </Box>
        </FadeOnView>
      </Box>
      <Box bgColor="orange.200">
        <Box
          // marginTop={{ base: '3rem' }}
          bgColor="yellow.200"
          padding="3rem"
          width="fit-content"
          pos="relative"
          top={{ base: "-3rem" }}
          marginInline={{ base: "auto", lg: "" }}
          marginLeft={{ lg: "8rem" }}
        >
          <Text>Choose your menu</Text>
          <VStack spacing=".8rem">
            <>
              <Heading fontSize="1.8rem">Breakfast</Heading>
              <Text>7:00 - 12:00, everyday</Text>
            </>
            <>
              <Heading fontSize="1.8rem">Dinner</Heading>
              <Text>12:00 - 23:00, everyday</Text>
            </>
            <>
              <Heading fontSize="1.8rem">Seasonal Bar offer</Heading>
              <Text>17:00 - 23:00, everyday</Text>
            </>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurant;
