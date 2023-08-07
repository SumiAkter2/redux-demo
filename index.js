// create  a action type:
const BUY_CAKE = "BAY_CAKE";

// CREATE ACTION CREATOR:
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
