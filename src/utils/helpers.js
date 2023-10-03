export const numberFormat = (value) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(value);
};
