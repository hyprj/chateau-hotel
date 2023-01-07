import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useBookingForm } from "@features/booking/hooks/useBookingForm";
import { DateRangePicker } from "./DateRangePicker";
import { PersonalDetailsModal } from "./PersonalDetailsModal";
import { BookingSummary } from "./BookingSummary";
import { DoneBanner } from "./DoneBanner";

export function Booking() {
  const { fields, setField, reset } = useBookingForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isBannerActive, setIsBannerActive] = useState<boolean>(false);

  const onSubmit = () => {
    onClose();
    reset();
    setIsBannerActive(true);
    setTimeout(() => setIsBannerActive(false), 3000);
  };

  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      textAlign="center"
      alignItems={{ base: "center", md: "flex-start" }}
      marginBlock="8rem 4rem"
    >
      <Box flexBasis="50%" mb="4rem">
        <Heading mb="2rem">Book your stay</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          deserunt possimus ut nihil id veritatis temporibus asperiores quam
          doloribus quis hic atque perspiciatis nostrum, quisquam, amet at,
          aspernatur maiores ipsa.
        </Text>
      </Box>
      <Flex flexBasis="50%" flexDir="column">
        <Box width={{ md: "50%" }} marginInline="auto">
          <DateRangePicker setField={setField} />
          {!!fields.price && (
            <>
              <Button
                width="100%"
                colorScheme="yellow"
                marginBottom="2rem"
                onClick={onOpen}
              >
                Reserve
              </Button>
              <PersonalDetailsModal
                handleClick={onSubmit}
                isOpen={isOpen}
                onClose={onClose}
              />
              <BookingSummary
                arriveDate={fields.arriveDate as Date}
                departureDate={fields.departureDate as Date}
                price={fields.price}
              />
            </>
          )}
        </Box>
      </Flex>
      <DoneBanner isOpen={isBannerActive} />
    </Flex>
  );
}
