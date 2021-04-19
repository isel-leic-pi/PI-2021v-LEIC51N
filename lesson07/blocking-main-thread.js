console.log("BEGIN")

let finish = false

setTimeout(cb, 3000)

function cb() {
  console.log("Some time after....")
  finish = true
}

console.log("END")

while(!finish);