export const validateEmail = (em: string): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return em.match(emailRegex) ? true : false;
};

export const formatArticleDate = (date: string) => {
  return date.replaceAll("-", ".").split(".").reverse().join(".");
};

export const dateToString = (date: Date) =>
  `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

export const calculateDaysBetween = (earlier: Date, later: Date) => {
  const NUMBER_OF_MS_IN_A_DAY = 1000 * 60 * 60 * 24;
  return (later.getTime() - earlier.getTime()) / NUMBER_OF_MS_IN_A_DAY;
};

export const reservation = [
  {
    id: "res1",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    label: "First Name",
  },
  {
    id: "res2",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    label: "Last Name",
  },
  {
    id: "res3",
    pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
    required: true,
    label: "Email",
  },
  {
    id: "res4",
    pattern: "^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$",
    required: true,
    label: "Phone Number",
  },
];
