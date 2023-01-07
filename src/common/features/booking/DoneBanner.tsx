import { Text, Box, SlideFade } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
};

export function DoneBanner({ isOpen }: Props) {
  return (
    <Box
      position="fixed"
      bottom=".6rem"
      left=".6rem"
      right=".6rem"
      pointerEvents="none"
    >
      <SlideFade in={isOpen} transition={{ enter: { duration: '.4' } }}>
        <Box borderRadius=".2rem" paddingBlock="1rem" bgColor="yellow.200">
          <Text fontWeight="bold">Successfuly reserved!</Text>
        </Box>
      </SlideFade>
    </Box>
  );
}
