// Viết hoa chữ cái đầu trong câu
export const capitalize = (val) => {
  if (!val) return '';
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};
