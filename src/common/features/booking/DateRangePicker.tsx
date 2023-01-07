import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { BookingForm } from '@features/booking/hooks/useBookingForm';
import { FieldType } from 'src/types/types';

type DateRangePickerProps = {
  setField: (key: BookingForm, value: FieldType) => void;
};

export function DateRangePicker({ setField }: DateRangePickerProps) {
  return (
    <FormControl>
      <FormLabel marginLeft="1rem">Arrive date</FormLabel>
      <Input
        marginBottom="2rem"
        type="date"
        onChange={(e) => setField(BookingForm.ArriveDate, e.target.valueAsDate)}
      />
      <FormLabel marginLeft="1rem">Departure date</FormLabel>
      <Input
        marginBottom="2rem"
        type="date"
        onChange={(e) =>
          setField(BookingForm.DepartureDate, e.target.valueAsDate)
        }
      />
      <FormLabel marginLeft="1rem">Number of guests</FormLabel>
      <NumberInput
        marginBottom="2rem"
        min={1}
        max={7}
        defaultValue={2}
        onChange={(value) =>
          setField(BookingForm.NumberOfGuests, Number(value))
        }
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}
