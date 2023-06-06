import React from 'react';
import Test from "./Test"
import { UserProvider } from "./UserProvider";
import { useParams } from "react-router-dom";

function ArtistDetails() {
  const [count, setCount] = React.useState(0);
  // const prev = React.useRef(count);
  // const val = getPrev(count);
  React.useEffect(() => {
    console.log("dheeraj parent")
    // prev.current = count;
  }, []);
  return (
    <Test name={"test"} age={10}/>
    // <div onClick={() => {setCount(count + 1)}}>
    //   prev:{prev.current} count:{count}
    // </div>
  )
}


// function usePw(count) {
//   const prev = React.useRef();
//   React.useEffect(() => {
//     prev.current = count
//   }, [count])
//   return prev.current;
// }

export default ArtistDetails;
