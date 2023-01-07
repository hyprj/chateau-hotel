import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const ChakraHeading = chakra(motion.p, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function WelcomeHeading() {
  return (
    <ChakraHeading
      position="relative"
      paddingTop="14rem"
      fontSize={["6xl", "7xl", "8xl", "9xl"]}
      color="white"
      width="100%"
      opacity="0.8"
      fontWeight="light"
      initial={{ opacity: 0, top: "-1rem", letterSpacing: ".6rem" }}
      animate={{ opacity: 0.8, top: "0rem", letterSpacing: ".5rem" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      idyllic life
    </ChakraHeading>
  );
}
