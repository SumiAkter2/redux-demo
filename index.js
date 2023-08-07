// create  a action type:
const BUY_CAKE = "BAY_CAKE";

// CREATE ACTION CREATOR:
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

// reducer:
// (previousState,action)=>newState;
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
