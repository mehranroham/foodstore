export function priceFormatter(price: number) {
  return new Intl.NumberFormat('fa', {
    currency: 'IRR',
    style: 'currency',
  }).format(price);
}
