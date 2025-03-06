export const formatMegabytes = (megabytes: number, round = true) => {
  if (megabytes < 1024) {
    return `${round ? Math.round(megabytes) : megabytes.toFixed(1)}mb`;
  }
  const gigabytes = megabytes / 1024;
  if (gigabytes < 1024) {
    return `${round ? Math.round(gigabytes) : gigabytes.toFixed(1)}gb`;
  }
  const terabytes = gigabytes / 1024;
  return `${round ? Math.round(terabytes) : terabytes.toFixed(1)}tb`;
};
