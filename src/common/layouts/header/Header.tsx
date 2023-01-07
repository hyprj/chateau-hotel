import {
  chakra,
  Text,
  Container,
  Flex,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { MenuLinks } from "./MenuLinks";
import { ToggleMenuBtn } from "./ToggleMenuBtn";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const headerBg = useColorModeValue(
    "rgba(240, 240, 240, 0.8)",
    "rgba(130, 130, 130, 0.8)"
  );

  return (
    <chakra.header
      position="fixed"
      zIndex={10}
      top="0"
      left="0"
      right="0"
      bg={headerBg}
      backdropFilter="blur(5px)"
      paddingBlock="2"
      letterSpacing="normal"
    >
      <Container maxW="container.lg">
        <Flex align="baseline" wrap="wrap" justify="space-between">
          <Link href="/">
            <Text
              as="button"
              userSelect="none"
              fontWeight="bold"
              fontFamily="heading"
              fontSize={[18, 18, 24, 28]}
              color="blue.900"
            >
              Château de Champblanc
            </Text>
          </Link>
          <ToggleMenuBtn isOpen={isOpen} onToggle={onToggle} />
          <MenuLinks isOpen={isOpen} onClick={onToggle} />
        </Flex>
      </Container>
    </chakra.header>
  );
};
