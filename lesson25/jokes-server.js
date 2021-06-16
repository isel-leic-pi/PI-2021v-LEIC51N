const PORT = process.argv[2] || 1904

const express = require('express')
const path = require('path')
const morgan = require('morgan')


//const jokesData = require('./jokes-db-mem')
const jokesData = require('./jokes-db')
const jokesServices = require('./jokes-services')(jokesData)
const jokesApi = require('./jokes-web-api')(express.Router(), jokesServices)
const jokesApp = require('./jokes-web-app')(express.Router(), jokesServices)
const usersApp = require('./users-web-app')( {global: express.Router(), path: express.Router()}, jokesServices)

const app = express()

app.use(usersApp.global)

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', (req, res) =>  res.send('1904 was Glorious year'))

app.use('/api', jokesApi)
app.use('/app', jokesApp)
app.use('/app/users', usersApp.path)


app.listen(PORT, () => {
  console.log(`Jokes app listening at http://localhost:${PORT}.`)
})





