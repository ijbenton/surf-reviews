export const getUSD = (cents: number) => {
  let dollars = cents / 100;
  return dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
