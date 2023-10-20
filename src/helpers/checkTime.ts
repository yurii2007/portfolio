export const timeChecker = (lastClick: number) => {
  const res = Date.now() - lastClick > 1000;
  return res;
};
