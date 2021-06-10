const PORT = process.argv[2] || 1904

const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded())


app.use(requestTime)
//app.use(morgan('tiny'))

app.use(requestLog)
app.use(mw2, mw1, mw2)

app.get('/', (req, res) =>  res.send('1904 was Glorious year'))
app.post('/', (req, res) =>  { 
  console.log(`body:`, req.body)
  res.send('POST to /');  
})

app.listen(PORT, () => {
  console.log(`Jokes app listening at http://localhost:${PORT}.`)
})


function mw1(req, rsp, next) {
  console.log("mw1 called")
  req.dummy = "SLB"
  setTimeout(() => next(), 2000)
}

function mw2(req, rsp, next) {
  console.log(`mw2 called with request having dummy attribute with value ${req.dummy}`)
  next()
}


function requestLog(req, res, next){
  console.log(`path = ${req.originalUrl} | Method=${req.method}`)
  next()
}


function requestTime(req, rsp, next) {
  const start = Date.now()
  rsp.on('finish', () => { 
    const elapsedTime = Date.now()-start
    console.log(`Request time was ${elapsedTime}ms`)
  })
  next()
}



