const jokesDb = require("./jokes-db-mem")

module.exports = {
    getJokes: getJokes,
    getJoke: getJoke
}

function getJokes(cb) {
    jokesDb.getJokes(cb)
}

function getJoke(jokeId, cb) {
    jokesDb.getJoke(jokeId, processJoke)


    function processJoke(err, joke) {
        if(!joke) {
            cb(`Joke with id ${jokeId} not found`)
        }

        cb(null, joke)
    }
}