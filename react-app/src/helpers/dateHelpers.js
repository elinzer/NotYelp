export const timeStringFormat = (timeString) => {
  const date = new Date();
  date.setHours(...timeString.split(":"));
  return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
};

export const utcToLocale = (utcTime) => {
  const date = new Date();
  date.setUTCHours(...utcTime.split(":"));
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const utcToLocale12 = (utcTime) => {
  const date = new Date();
  date.setUTCHours(...utcTime.split(":"));
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
