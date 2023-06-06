import { useDispatch } from "react-redux";

const ExampleOne = () => {
    const dispatch = useDispatch();
    return (
      <div onClick={() => dispatch({ type: "Bike", payload: [] })}>
        ExampleOne
      </div>
    );
  }
export default ExampleOne;
