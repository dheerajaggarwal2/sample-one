import { LIST_DATA, CART_COUNT } from "./constants";

function reducer(state, action) {
  console.log("reduce", action);
  switch (action.type) {
    case CART_COUNT:
      return action?.payload || 0;
    case LIST_DATA:
      return action?.payload || [];
    case "example":
      return action?.payload || "";
    case "Bus":
      return {
        vehicle: "Its a Bus"
      };
    default:
      return state;
  }
}

export default reducer;
