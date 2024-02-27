const md5 = require('md5');

export const getXAuth = (password: string): string => {
  const curDate = new Date();
  return md5(`${password} ${curDate.getFullYear}${curDate.getMonth}${curDate.getDate}`);
};
