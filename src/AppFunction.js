import React from "react";
import Freecodecamp from "./components/Freecodecamp";


function AppFunction () {
  const object = {
    name:"Shubham",
    lastName: "Patil"
  }
  const fullName = function (city,state) {
    console.log(this.name + " " + this.lastName + " from " + city+ " " + state)
  }
  fullName.call(object,"Pune","Maharashtra");
  fullName.apply(object,["Pune","Maharashtra"])
  const printMe = fullName.bind(object,"Pune","Maharashtra")
  printMe()
  const object1 = {
    name:"Pratik",
    lastName: "Sathye"
  }
  fullName.call(object1,"Malegaon","From call of maharashtra")
  fullName.apply(object1,["Malegaon,","Maharashtra"])
  return(
    <div>
    <Freecodecamp/>
    </div>
  )
}

export default AppFunction;