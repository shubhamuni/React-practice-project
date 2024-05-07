import React from "react";
import Freecodecamp from "./components/Freecodecamp";


function AppFunction () {
  const promise = new Promise((resolve, reject) => {
    if(false) {
      resolve("Stuff worked")
    } else {
      reject("Oops there is a problem")
    }
  })
  promise.then(result => result + ' ?').then(data => console.log(data)).catch(error => console.log(error))
  
  return(
    <div>
    <Freecodecamp/>
    </div>
  )
}

export default AppFunction;