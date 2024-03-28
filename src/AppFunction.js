import React from "react";


function AppFunction () {
  const obj = {
    a:10,
    x: () => {
      const y = () =>{
        console.log(this);
      }
      y();
    },
  };
  obj.x();
  return(
    <p>Checking code</p>
  )
}

export default AppFunction;