const jokesDb = require("./jokes-db-mem")
const uuid = require('uuid')
const errors = require('./errors/jokes-errors')

module.exports = {
    getJokes: getJokes,
    getJoke: getJoke,
    addJoke: addJoke,
    deleteJoke: deleteJoke,
    editJoke: editJoke
}

function getJokes(cb) {
    jokesDb.getJokes(cb)
}

function getJoke(jokeId, cb) {
    console.log(`jokeId: ${jokeId}`)
    if(!uuid.validate(jokeId)) {
        return cb(errors.INVALID_UUID(jokeId))
    }

    jokesDb.getJoke(jokeId, processJoke)


    function processJoke(err, joke) {
        if(!joke) {
            cb(`Joke with id ${jokeId} not found`)
        }

        cb(null, joke)
    }
}


function addJoke(newJoke, cb) {
}

function deleteJoke(jokeId, cb) {
}

function editJoke(newJoke, cb) {
}
