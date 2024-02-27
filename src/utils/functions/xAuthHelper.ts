const md5 = require('md5');

export const getXAuth = (password: string): string => {
  const curDate = new Date();
  const strDate = curDate.toISOString().split('T')[0].replace(/\-/g, '');
  const str = `${password}_${strDate}`;
  return md5(str);
};
