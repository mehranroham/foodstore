export function priceFormatter(price: number) {
  const result = new Intl.NumberFormat('fa', {
    currency: 'IRR',
    style: 'currency',
  }).format(+price);

  return result;
}
