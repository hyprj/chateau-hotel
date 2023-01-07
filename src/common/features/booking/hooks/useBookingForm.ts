import { useState } from 'react';
import { FieldType, FormSchema } from 'src/types/types';
import { tryGetPrice } from './utils';

export enum BookingForm {
  ArriveDate = 'arriveDate',
  DepartureDate = 'departureDate',
  NumberOfGuests = 'numberOfGuests',
}
const defaultFormSettings: FormSchema = {
  arriveDate: null,
  departureDate: null,
  numberOfGuests: 2,
  price: 0,
};

export const useBookingForm = () => {
  const [fields, setFields] = useState<FormSchema>(defaultFormSettings);

  const setField = (key: BookingForm, value: FieldType) => {
    setFields((prev) => {
      const current = { ...prev, [key]: value };
      const price = tryGetPrice(
        current.arriveDate,
        current.departureDate,
        current.numberOfGuests
      );
      return { ...current, price };
    });
  };

  const reset = () => {
    setFields(defaultFormSettings);
  };
  return { fields, setField, reset };
};
