const PORT = process.argv[2] || 1904

const express = require('express')
const path = require('path')

const jokesData = require('./jokes-db-mem')
const jokesServices = require('./jokes-services')(jokesData)
const jokesApi = require('./jokes-web-api')(jokesServices)
const jokesApp = require('./jokes-web-app')(jokesServices)

const app = express()


app.use(express.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', (req, res) =>  res.send('1904 was Glorious year'))

app.get('/api/jokes', jokesApi.getJokes)
app.post('/api/jokes', jokesApi.addJoke)
app.get('/api/jokes/:jokeId', jokesApi.getJoke)
app.delete('/api/jokes/:jokeId', jokesApi.deleteJoke)
app.put('/api/jokes/:jokeId', jokesApi.editJoke)


app.get('/jokes', jokesApp.getJokes)
app.get('/jokes/:jokeId', jokesApp.getJoke)


app.listen(PORT, () => {
  console.log(`Jokes app listening at http://localhost:${PORT}.`)
})





