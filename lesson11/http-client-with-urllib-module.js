const url = process.argv[2] || "https://api.chucknorris.io/jokes/random"



const http = require('urllib')

const req = http.request(url, processResponse)


function processResponse(err, data , res) {
  if(err) {
    return console.log(err)
  }
  console.log(`Status code: ${res.statusCode}`)
  console.log(`Headers:`, res.headers)

  console.log("Response Body: ", data.toString())
}