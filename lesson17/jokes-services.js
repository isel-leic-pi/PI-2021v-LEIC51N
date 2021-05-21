const errors = require('./errors/jokes-errors')
const JOKE_ID_LEN = 22

module.exports = function (jokesData) {
    return {
        getJokes: getJokes,
        getJoke: getJoke,
        addJoke: addJoke,
        deleteJoke: deleteJoke,
        editJoke: editJoke
    }


    function getJokes(cb) {
        jokesData.getJokes(cb)
    }

    function getJoke(jokeId, cb) {
        console.log(`jokeId: ${jokeId}`)
        if (validId(jokeId)) {
            return cb(errors.INVALID_JOKE_ID(jokeId))
        }

        jokesData.getJoke(jokeId, processJoke)


        function processJoke(err, joke) {
            if (!joke) {
                return cb(errors.NOT_FOUND(jokeId))
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

    /// Auxiliary functions
    function validId(jokeId) {
        return jokeId.length != JOKE_ID_LEN
    }

}
