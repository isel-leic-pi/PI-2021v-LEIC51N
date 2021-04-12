let f1 = ["10", []]


let f2 = function f(p) {
  let x = p;
  console.log(`f was called with ${p}`)

  for(let i = 0; i < arguments.length; ++i) {
    console.log(`arguments[${i}] = ${arguments[i]}`)
  }

  console.log("--------------")
}


let a = [0, "123", f2]
f();
f(10);
f("ISEL");
f(1,2,3,4,5)


console.log("##############")

let f1 = function(p = 10, ...args) {

  // Using the spread operator to access arguments
  console.log(`f was called with ${p}`)

  for(let i = 0; i < args.length; ++i) {
    console.log(`args[${i}] = ${args[i]}`)
  }

  console.log("--------------")
}

f1();
f1(35);
f1(1);
f1("ISEL");
f1(1,2,3,4,5)

