export const getFilteredProducts = (products, filters) => {
  if (!products) {
    return null;
  }

  const { rating, categoryIds, sort, priceRange } = filters;

  let filteredProducts = products
    ?.filter(product => product.rating >= rating)
    .filter(({ price, discount }) => price - discount <= priceRange);

  if (categoryIds.length !== 0) {
    filteredProducts = filteredProducts.filter(product =>
      categoryIds.includes(product.categoryId)
    );
  }

  if (sort === "LOW_TO_HIGH") {
    return filteredProducts.sort(
      (a, b) => a.price - a.discount - (b.price - b.discount)
    );
  }

  if (sort === "HIGH_TO_LOW") {
    return filteredProducts.sort(
      (a, b) => b.price - b.discount - (a.price - a.discount)
    );
  }

  return filteredProducts;
};
