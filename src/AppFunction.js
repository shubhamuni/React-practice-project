import React from "react";
import Freecodecamp from "./components/Freecodecamp";


function AppFunction () {
  const promise = new Promise((resolve, reject) => {
    if(true) {
      resolve("Stuff worked")
    } else {
      reject("Oops there is a problem")
    }
  })
  //.catch is used for handling all the errors arises from all .then methods
  // promise.then(result => result + ' ?').then(data => console.log(data)).catch(error => console.log(error)).then(result => {
  //   return result+" Happened"
  // }).catch(()=> console.log("Error in second catch"));

  const promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 300,"Hello")
  })
  const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000,"Kitty")
  })
  const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000,"is there")
  })
  const promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 5000,"any chance that you are looking for")
  })
  Promise.all([promise,promise1,promise2,promise3,promise4]).then(
    value => console.log(value)
  )
  return(
    <div>
    <Freecodecamp/>
    </div>  
  )
}

export default AppFunction;