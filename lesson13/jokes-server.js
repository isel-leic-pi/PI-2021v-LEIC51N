const PORT = 1904

const jokesApi = require("./jokes-web-api")
const express = require('express')


const app = express()


app.get('/', (req, res) =>  res.send('1904 was Glorious year'))

app.get('/jokes', jokesApi.getJokes)
app.post('/jokes', jokesApi.addJoke)
app.get('/jokes/:jokeId', jokesApi.getJoke)
app.delete('/jokes/:jokeId', jokesApi.deleteJoke)
app.put('/jokes/:jokeId', jokesApi.editJoke)


app.listen(PORT, () => {
  console.log(`Jokes app listening at http://localhost:${PORT}`)
})




