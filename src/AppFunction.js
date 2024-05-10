import React from "react";
import Freecodecamp from "./components/Freecodecamp";


function AppFunction () {
  const urls = ["https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/users"
  ]

/*   async function fetchFunction() {
    try {
      const [posts, albums, user] = await Promise.all(urls.map((url) => {
        return fetch(url).then(result => result.json())
      }))
      console.log("Posts",posts);
      console.log("Albums",albums);
      console.log("User",user);
    } catch (error) {
      console.log("Oops the error is",`${error}`)
    }
  }
  fetchFunction()
  */
 const promise1 = new Promise((resolve, reject) =>{
  setTimeout(resolve, 2000)
 })
 const promise2 = new Promise((resolve, reject) =>{
  setTimeout(reject, 2500)
 })
 Promise.any([promise1, promise2]).then(data => console.log(data)).catch(e => console.log(`"something went wrong" ${e}`))

  // const forFetch = async function () {
  //   const arrayOfUrls = urls.map((url)=>fetch(url))
  //   for await (let request of arrayOfUrls) {
  //     const data = await request.json();
  //     console.log(data);
  //   }
  // }
  // forFetch();

  // Promise.all(urls.map((url) => {
  //   return fetch(url).then(result => result.json())
  // })).then(data => {
    // console.log(data[0]);
    // console.log(data[1]);
    // console.log(data[2]);
  // }).catch(()=> console.log("Error"))
  /**const promise = new Promise((resolve, reject) => {
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
  )**/
  return(
    <div>
    <img src={data} alt="swanand face"/>
    </div>  
  )
}

export default AppFunction;