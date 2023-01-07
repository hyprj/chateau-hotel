import {
  Box,
  Text,
  Container,
  Heading,
  Image,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { FadeOnView } from '../../components/animations/FadeOnView';

export function HomeAbout() {
  return (
    <FadeOnView>
      <Box>
        <Container maxW="container.lg" paddingBlock="3rem 10rem">
          <Flex flexDir={{ base: 'column', lg: 'row' }} alignItems="center">
            <Box flex="1" mt="1rem" width={{ base: '80%', lg: '100%' }}>
              <Heading textAlign={{ base: 'center', lg: 'left' }} mb="2rem">
                Welcome
              </Heading>
              <VStack>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  architecto totam ipsam fuga cum quasi doloribus, consectetur
                  dolorum necessitatibus aspernatur!
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  architecto totam ipsam fuga cum quasi doloribus, consectetur
                  dolorum necessitatibus aspernatur!
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  architecto totam ipsam fuga cum quasi doloribus, consectetur
                  dolorum necessitatibus aspernatur!
                </Text>
              </VStack>
            </Box>
            <Box flex="1" mt={{ base: '4rem', lg: '0' }}>
              <Image src="images/entrance-sm.jpg" alt="entrance" width="100%" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </FadeOnView>
  );
}
