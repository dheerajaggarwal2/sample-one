import React from "react";
import { UserContext } from "./UserProvider";

function Test1({ name }) {
  const userDetails = React.useContext(UserContext);
  React.useMemo(() => {

  }, [])
  console.log("userDetails", userDetails);
  React.useEffect(() => {
    console.log("dheeraj child 1")
    // prev.current = count;
  }, []);
  return (
    <div>
      {name}
    </div>
  )
}

export default Test1;