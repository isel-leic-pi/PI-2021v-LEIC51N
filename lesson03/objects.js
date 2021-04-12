
// Defining object with "literal notation"

let o = {
  a: 123,
  b: "SLB" 
}

let o1 = o;

console.log(o.a)
console.log(o1.a)

// Creating a new object property 
o.c = true
console.log(o1.c)
console.log(o1.d)



// 2 syntax to access object properties
o.c      // Dot notation
o["c"]   // Subscript notation

let d = "c"

let propName = "c"
o[propName]   // Subscript notation

o["who is the best"] = "Benfica"

console.log("-----------------")

for(let k in o) {
  //console.log("o[" + k + "]=" + o[k])
  console.log(`o[${k}]=${o[k]}`)
}

let o3 = {
  x: o
}

console.log(o3.x["a"])



