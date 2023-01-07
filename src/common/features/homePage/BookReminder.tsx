import { Text, Flex, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';

export function BookReminder() {
  return (
    <Flex
      w="100%"
      flexDir={'column'}
      align="center"
      justify="center"
      bgColor="#EAE1C9"
      bgPos="0 -6rem"
      pb="4rem"
      pt="2rem"
    >
      <Heading letterSpacing=".1rem">Come and rest</Heading>
      <Text letterSpacing=".2rem" mb="2rem">
        BOOK YOUR STAY
      </Text>
      <Button
        letterSpacing="1px"
        bgColor="green.700"
        color="white"
        colorScheme="green"
      >
        <Link href="book">Book</Link>
      </Button>
    </Flex>
  );
}
