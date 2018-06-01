let promise = new Promise((resolve, reject) => {
  resolve('Hello')
})

promise.then((str) => `${str} World`)
  .then((str) => `${str}!`)
  .then((str) => console.log(str))
  // Hello World!

let p = new Promise((resolve, reject) => {
  resolve(1)
})

let eventAdd = (val) => {
  return new Promise((resolve, reject) => {
    resolve(val + 1)
  })
}

p.then(eventAdd)
  .then(eventAdd)
  .then((val) => console.log(val)); //3

