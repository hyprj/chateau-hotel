import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';

type Props = {
  handleClick: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export function PersonalDetailsModal({ handleClick, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Personal details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <VStack alignItems="stretch" spacing="1rem">
              <Box>
                <FormLabel htmlFor="" mb=".2rem" ml=".3rem">
                  First Name
                </FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel mb=".2rem" ml=".3rem">
                  Last Name
                </FormLabel>
                <Input name="lastName" required />
              </Box>
              <Box>
                <FormLabel mb=".2rem" ml=".3rem">
                  Email
                </FormLabel>
                <Input type="email" required />
              </Box>
              <Box>
                <FormLabel mb=".2rem" ml=".3rem">
                  Phone Number
                </FormLabel>
                <Input type="text" required />
              </Box>
            </VStack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            width="100%"
            colorScheme="green"
            onClick={() => handleClick()}
          >
            Reserve
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
