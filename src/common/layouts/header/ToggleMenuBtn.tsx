import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const ToggleMenuBtn = ({ isOpen, onToggle }: Props) => {
  return (
    <Button
      variant="link"
      colorScheme="black"
      display={{ base: "block", md: "none" }}
    >
      {isOpen && <CloseIcon onClick={onToggle} />}
      {!isOpen && <HamburgerIcon fontSize="xl" onClick={onToggle} />}
    </Button>
  );
};
