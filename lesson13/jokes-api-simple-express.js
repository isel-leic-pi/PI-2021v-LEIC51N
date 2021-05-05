const PORT = 1904

const express = require('express')
const app = express()


app.get('/', (req, res) =>  res.send('1904 was Glorious year'))

app.get('/jokes', getJokes)
app.post('/jokes', addJoke)
app.get('/jokes/:jokeId', getJoke)
app.delete('/jokes/:jokeId', deleteJoke)
app.put('/jokes/:jokeId', editJoke)



app.listen(PORT, () => {
  console.log(`Jokes app listening at http://localhost:${PORT}`)
})


function getJokes(req, rsp) {
  rsp.send("Get Jokes")
}

function addJoke(req, rsp) {
  rsp.send("Add Joke")
}
function getJoke(req, rsp) {
  rsp.send(`Get Joke ${req.params.jokeId}`)
}
function deleteJoke(req, rsp) {
  rsp.send(`Delete Joke ${req.params.jokeId}`)
}

function editJoke(req, rsp) {
  rsp.send(`Edit Joke ${req.params.jokeId}`)
}