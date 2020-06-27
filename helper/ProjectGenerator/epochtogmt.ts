interface Conversion {
  day: number;
  month: number;
  year: number;
}

export const epochToGmt = (date: string): Conversion => {
  let convertedDate = new Date(date);
  let day = convertedDate.getDay();
  let month = convertedDate.getMonth();
  let year = convertedDate.getFullYear();
  return { day, month, year };
};
