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
  //.catch is used for handling all the errors arises from all .then methods
  promise.then(result => result + ' ?').then(data => console.log(data)).catch(error => console.log(error)).then(result => {
    return result+" Happened"
  }).catch(()=> console.log("Error in second catch"))

  return(
    <div>
    <Freecodecamp/>
    </div>
  )
}

export default AppFunction;