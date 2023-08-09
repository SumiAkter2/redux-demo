const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    quantity: 1,
  };
};

const initialState = {
  numOfCake: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};
// console.log("rashed esta mi amor");
