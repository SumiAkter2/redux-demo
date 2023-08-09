const BUY_BREAD = "BUY_BREAD";
const buyBread = () => {
  return {
    type: BUY_BREAD,
    quantity: 1,
  };
};
const initialState = {
  numOfBread: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BREAD:
      return {
        ...state,
        numOfBread: state.numOfBread - 1,
      };

    default:
      return state;
  }
};
