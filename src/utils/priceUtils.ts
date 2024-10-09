export function parsePrice(price: string): number {
  // Remove "Rs." prefix and any commas
  const cleanedPrice = price.replace(/Rs\.|,/g, "");
  const parsedPrice = parseFloat(cleanedPrice);

  if (isNaN(parsedPrice)) {
    console.error(`Failed to parse price: ${price}`);
    return 0;
  }

  console.log(`Parsed ${price} to ${parsedPrice}`);
  return parsedPrice;
}

export function sumPrices(prices: string[]): number {
  return prices.reduce((total, price) => {
    const parsedPrice = parsePrice(price);
    return total + parsedPrice;
  }, 0);
}

export function formatPrice(price: number): string {
  console.log(price);
  return `Rs.${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
