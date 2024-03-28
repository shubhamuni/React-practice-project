import React from "react";


function AppFunction () {
  const obj = {
    a:10,
    x: () => {
      const y = () =>{
        const z =() => {
          console.log(this);
        }
        z();
      }
      y();
    },
  }
  obj.x();
  return(
    <p>Checking code</p>
  )
}

export default AppFunction;