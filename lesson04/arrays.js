let a = [10, "SLB", {a: 123}, [2,3], null, , 25];

a.m = 123

showObject(a)

console.log(a.length)

a.length = 10

showObject(a)


a[23] = 123;
// a.abc = "SLB"

showObject(a)


// console.log(a[12])
// console.log(a[4587])
// console.log(a.abc)
console.log(a.length)

a.length = 2

showObject(a)


// The following object looks like the previous array, but its not an array!!!
a =  {
  0: 0,
  1: "SLB",
  2: {a: 123},
  3: [],
  4: null,
  6: 10,
  23: 123,
  abc: "slb"
}

showObject(a)
console.log(a.length)

a.length = 2
showObject(a)


function showObject(o) {
  for(let k in o) {
    console.log(`o[${k}]=${o[k]}`)
  }
  console.log("-----------------")
}

