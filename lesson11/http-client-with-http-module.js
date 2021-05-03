const { RSA_PKCS1_OAEP_PADDING } = require('constants');
const https = require('https')


// Lets get a Chuck Norris fact from https://api.chucknorris.io/jokes/random



https.get("https://api.chucknorris.io/jokes/random", processResponse)

function processResponse(res) {
  console.log('statusCode:', res.statusCode)
  console.log('headers:', res.headers)


  res.on('data', processData)

  function processData(data) {
    console.log("Response BODY:" +  data.toString())
  }


  res.on('end', (err) =>  console.log(`No more data in response`))
  res.on('error', (err) =>  console.log(`ERROR: ${err}`))
  
}

