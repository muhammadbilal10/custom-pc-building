export function parsePriceString(priceString: string): number {
  // Remove "Rs." and any commas, then parse as a float
  const numericString = priceString.replace(/Rs\.|,/g, "");
  return parseFloat(numericString);
}

export function sumPrices(prices: string[]): number {
  return prices.reduce((sum, price) => sum + parsePriceString(price), 0);
}

export function formatPrice(price: number): string {
  // Format the number back to the original style
  return `Rs.${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
