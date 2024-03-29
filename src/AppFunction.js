import React from "react";


function AppFunction () {
  const object = {
    name:"Shubham",
    lastName: "Patil"
  }
  const fullName = function (city,state) {
    console.log(this.name + " " + this.lastName + " " + city +" from " + state)
  }
  fullName.call(object,"Pune","Maharashtra");
  fullName.apply(object,["Pune","Maharashtra"])
  const printMe = fullName.bind(object,"Pune","Maharashtra")
  printMe()
  return(
    <div>
      <p>Checking code</p>
    </div>
  )
}

export default AppFunction;