const PORT = process.argv[2] || 1904

const jokesData = require('./jokes-db-mem')
const jokesServices = require('./jokes-services')(jokesData)
const jokesApi = require('./jokes-web-api')(jokesServices)
const express = require('express')

const app = express()

app.get('/', (req, res) =>  res.send('1904 was Glorious year'))

app.get('/jokes', jokesApi.getJokes)
app.post('/jokes', jokesApi.addJoke)
app.get('/jokes/:jokeId', jokesApi.getJoke)
app.delete('/jokes/:jokeId', jokesApi.deleteJoke)
app.put('/jokes/:jokeId', jokesApi.editJoke)


app.listen(PORT, () => {
  console.log(`Jokes app listening at http://localhost:${PORT}.`)
})





