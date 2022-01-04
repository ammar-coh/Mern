export const checkoutreducer = (state = [], actions) => {
  switch (actions.type) {
    case "setProductsToCartReducer":
      state = actions.data.products;
      return state;

    case "addToCartReducer":
      state = actions.data.data.products;
      return state;

    case "removeFromCartReducer":
      state = actions.data.products;
      return state;

    case "resetCart":
      state = [];
      return state;

    default:
      return state;
  }
};
