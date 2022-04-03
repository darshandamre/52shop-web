const initialfilters = {
  priceRange: 10000,
  sort: null,
  categoryIds: [],
  rating: null
};

const filtersReducer = (state, { type, payload }) => {
  switch (type) {
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: payload
      };

    case "SORT":
      return {
        ...state,
        sort: payload
      };

    case "CATEGORY":
      const { categoryIds } = state;
      return categoryIds.includes(payload)
        ? {
            ...state,
            categoryIds: categoryIds.filter(id => id !== payload)
          }
        : {
            ...state,
            categoryIds: [...categoryIds, payload]
          };

    case "RATING":
      return {
        ...state,
        rating: payload
      };

    case "CLEAR_ALL":
      return initialfilters;

    default:
      throw new Error(`invalid filters action ${type}`);
  }
};

export { initialfilters, filtersReducer };
