export const padding = (num: number, length: number) => {
  return Array(length).join("0").concat(String(num)).slice(-length);
};
