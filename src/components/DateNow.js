import date from "date-and-time";

function DateNow({ format }) {
  const now = new Date();
  const nowFormatted = date.format(now, format);
  return nowFormatted;
}

export default DateNow;
