import {
  formatDate,
  dateToString,
  getDaysBetweenDates,
  validateEmail,
} from './utils';

describe('Format dates', () => {
  test('format date', () => {
    expect(formatDate('2001-01-01')).toBe('01.01.2001');
  });
});

describe('Date to String', () => {
  test('Should return stringified date', () => {
    expect(dateToString(new Date('1995-12-17T03:24:00'))).toBe('17.12.1995');
  });
});

describe('Calculating days between 2 Dates', () => {
  test('Should return 5', () => {
    const earlier = new Date('1995-12-12T03:24:00');
    const later = new Date('1995-12-17T03:24:00');
    expect(getDaysBetweenDates(earlier, later)).toBe(5);
  });
  test('Should return 0', () => {
    const date = new Date('1995-12-12T03:24:00');
    expect(getDaysBetweenDates(date, date)).toBe(0);
  });
  test('Should return 2', () => {
    const earlier = new Date('1995-12-12T03:24:00');
    const later = new Date('1995-12-14T03:24:00');
    expect(getDaysBetweenDates(earlier, later)).toBe(2);
  });
  test('Should return -1', () => {
    const earlier = new Date('1995-12-12T03:24:00');
    const later = new Date('1995-12-11T03:24:00');
    expect(getDaysBetweenDates(earlier, later)).toBe(-1);
  });
});

describe('Email validation', () => {
  test('Check for double @', () => {
    const email = 'test@@gmail.com';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('Check for dot at the end', () => {
    const email = 'test@gmail.com.';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('Check for double dot', () => {
    const email = 'test@gmail..com';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('Check for white spaces betwen characters', () => {
    const email = 't est@gmail.com';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('Check for white spaces at the end', () => {
    const email = 'test@gmail.com ';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('Check proper email adres', () => {
    const email = 't.e.s.t@gmail.com';
    expect(validateEmail(email)).toBeTruthy();
  });
});
