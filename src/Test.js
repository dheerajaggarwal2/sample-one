import React from 'react';
import Test1 from './Test1';

function Test({ name, age }) {
  console.log(name, age);
  React.useEffect(() => {
    console.log("dheeraj child")
    // prev.current = count;
  }, []);
  return (
   <Test1 name={name} />
  )
}

export default Test;