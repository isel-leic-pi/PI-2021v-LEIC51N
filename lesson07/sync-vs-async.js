
console.log(0)

let res = mul(2,3)

console.log(1)
console.log(res)

console.log('------------')



console.log(2)
mulAsyncWithSyncImplementation(2,3, res => console.log(res))
console.log(3)
mulAsyncWithSyncImplementation(3,4, res => console.log(res))
console.log(4)

// console.log('------------')


console.log(5)
mulAsyncWithAsyncImplementation(5,4, res => console.log(res))
console.log(6)

mulAsyncWithSynchOrAsyncImplementation(6,7, res => console.log(res))
console.log(7)


/// Function implementations


// (Number, Number) -> Number
function mul(a, b) {
  return a*b
}


// (Number, Number, (Number)->Undefined ) -> Undefined
function mulAsyncWithSyncImplementation(a, b, cb) {
  cb(a*b);
}

// (Number, Number, (Number)->Undefined ) -> Undefined
function mulAsyncWithAsyncImplementation(a, b, cb) {
  let wait = 0//getRandomNumber(2000)
  console.log(`waiting: ${wait} ms`)
  setTimeout(() => {
    cb(a*b)  
  }, wait)
}


function mulAsyncWithSyncOrAsyncImplementation(a, b, cb) {
  let wait = 1000//getRandomNumber(2000)
  let n = getRandomNumber(2)
  console.log(`n=${n}`) 
  if(n > 0.5) {
    return cb(a*b)
  } 
  console.log(`waiting: ${wait} ms`)
  setTimeout(() => {
    cb(a*b)  
  }, wait)
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

