export function formatearDinero(cantidad) {
  const currency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return currency.format(cantidad);
}
