const promise = new Promise((resolve,reject) => {
  setTimeout(() => {
   /*  resolve({
      name:"swathi",
      age:89
    });  */   
    reject('Something went wrong')
  }, 1500);
})
console.log("before")
promise.then((data) => {
  console.log("1",data.age);
}).catch((error) => {
console.log("error is ", error)
})
console.log("after")