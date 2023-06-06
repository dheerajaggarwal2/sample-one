import { useSelector } from "react-redux";

const ExampleTwo = () => {
  const ui = useSelector(state => state);
  console.log(ui);
  return (
    <div>
    <div>{JSON.stringify(ui)}111</div>
     ExampleTwo
    </div>
  );
}
export default ExampleTwo;