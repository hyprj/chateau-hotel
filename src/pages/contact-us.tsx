import type { NextPage } from "next";
import {
  chakra,
  Container,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  AspectRatio,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { FadeOnView } from "@components/animations/FadeOnView";
import { Parallax } from "@components/animations/Parallax";
import { ContactForm } from "@features/contactForm/ContactForm";
// import { ContactForm } from '@features/contactForm/ContactForm';
// import { ContactForm } from '@components/form/contactForm';

const Contact: NextPage = () => {
  return (
    <chakra.section>
      <Flex
        height="100vh"
        width="100%"
        bgImage="url(./images/chateau-night.jpg)"
        bgPos="center top"
        bgSize="cover"
        bgRepeat="no-repeat"
        justify="center"
        align="center"
      >
        <FadeOnView>
          <Parallax speed={0.1}>
            <Heading
              as="h2"
              color="white"
              marginTop="12rem"
              marginBottom="6rem"
              size="4xl"
            >
              Contact Us
            </Heading>
          </Parallax>
        </FadeOnView>
      </Flex>
      <Container maxW="container.lg" textAlign="center" mt="6rem">
        <FadeOnView>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="6rem">
            <GridItem>
              <Heading
                as="h3"
                paddingBottom="3rem"
                textAlign={{ base: "center", md: "left" }}
              >
                Get in touch
              </Heading>
              <Box
                display="flex"
                flexDir="column"
                alignItems={{ base: "center", md: "flex-start" }}
              >
                <Box textAlign="left">
                  <Text>
                    <strong>Address:</strong> <span>Château de Champblanc</span>
                    ,
                  </Text>
                  <Text paddingLeft="1rem">
                    36140 Crozon-sur-Vauvre, France
                  </Text>
                  <Text>
                    <strong>Phone:</strong> +01 123 456 789
                  </Text>
                  <Text fontWeight="bold">Phone working hours:</Text>
                  <UnorderedList paddingLeft="2rem">
                    <ListItem>Mon - Sat: 7:00 - 22:00</ListItem>
                    <ListItem>Sun: 8:00 - 20:00</ListItem>
                  </UnorderedList>
                  <Text>
                    <strong>Email:</strong> champblanc@chateau.com
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Heading
                as="h3"
                paddingBottom="3rem"
                textAlign={{ base: "center", md: "left" }}
              >
                Write to us
              </Heading>
              <ContactForm />
            </GridItem>
            <GridItem gridColumn={{ md: "1/3" }} marginBottom="8rem">
              <Heading as="h3" pb="3rem" textAlign={{ md: "center" }}>
                Map
              </Heading>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.5073595422127!2d-0.31202758468017716!3d45.75419242206759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4800f27b04a7495f%3A0xcc3d287c8db7d4c9!2sCh%C3%A2teau%20de%20Champblanc!5e0!3m2!1spl!2spl!4v1665330035850!5m2!1spl!2spl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </FadeOnView>
      </Container>
    </chakra.section>
  );
};

export default Contact;
