import { LIST_DATA, CART_COUNT } from "./constants";

function reducer(state, action) {
  console.log("reduce", action);
  switch (action.type) {
    case CART_COUNT:
      return {
        ...state,
        cartCount: action?.payload || 0
      }
    case LIST_DATA: 
    return {
      ...state,
      userlist: action?.payload || [],
    }
    case "example":
      return action?.payload || "";
    case "Bus":
      return {
        vehicle: "Its a Bus"
      };
    case "TEST": {
      return {
        ...state,
        test: action?.payload || 0
      }
    }
    default:
      return state;
  }
}

export default reducer;
