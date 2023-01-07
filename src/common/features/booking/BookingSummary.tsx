import { Text } from "@chakra-ui/react";
import { dateToString } from "@shared/utils";

type BookingSummaryProps = {
  arriveDate: Date;
  departureDate: Date;
  price: number;
};
export function BookingSummary({
  arriveDate,
  departureDate,
  price,
}: BookingSummaryProps) {
  if (!price) return null;
  return (
    <Text>{`From ${dateToString(arriveDate)} to ${dateToString(
      departureDate
    )} for ${price}$`}</Text>
  );
}
