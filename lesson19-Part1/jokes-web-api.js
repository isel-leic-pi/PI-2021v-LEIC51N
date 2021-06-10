
const httpErrors = require('./errors/http-errors')

module.exports = function (jokesServices) {
  return {
    getJokes: getJokes,
    getJoke: getJoke,
    addJoke: addJoke,
    deleteJoke: deleteJoke,
    editJoke: editJoke
  }

  function getJokes(req, rsp) {
    jokesServices.getJokes(processJokeData(rsp))
  }

  function addJoke(req, rsp) {
    console.log("Add Joke")

    req.body.id = req.params.jokeId;
    jokesServices.addJoke(req.body, processJokeData(rsp))
  }

  function getJoke(req, rsp) {
    jokesServices.getJoke(req.params.jokeId, processJokeData(rsp))

  }
  function deleteJoke(req, rsp) {
    console.log(`Delete Joke ${req.params.jokeId}`)
    jokesServices.deleteJoke(req.params.jokeId, processJokeData(rsp))
  }

  function editJoke(req, rsp) {
    console.log(`Edit Joke ${req.params.jokeId}`)

    req.body.id = req.params.jokeId;

    jokesServices.editJoke(req.body, processJokeData(rsp))

  }


  function processJokeData(rsp) {
    return function (err, joke) {
      if (err) {
        const httpErr = httpErrors.convertToHttpError(err)
        console.log(httpErr)
        rsp.statusCode = httpErr.status
        return rsp.json(httpErr.body)
      }

      rsp.json(joke)
    }
  }
}
