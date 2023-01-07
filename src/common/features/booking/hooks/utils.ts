import { PotentialDate } from "@shared/types";
import { calculateDaysBetween } from "@shared/utils";

export function tryGetPrice(
  arriveDate: PotentialDate,
  departureDate: PotentialDate,
  numberOfGuests: number
) {
  if (arriveDate && departureDate) {
    return calculatePrice(
      calculateDaysBetween(arriveDate, departureDate),
      numberOfGuests
    );
  }
  return 0;
}

export function calculatePrice(daysBetween: number, numberOfGuests: number) {
  const NIGHT_COST = 100;
  return daysBetween * numberOfGuests * NIGHT_COST;
}
