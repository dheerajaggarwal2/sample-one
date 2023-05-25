import { LIST_DATA } from "./constants";

function reducer(state, action) {
  console.log("reduce", action);
  switch (action.type) {
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
