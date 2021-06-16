
const httpErrors = require('./errors/http-errors')

module.exports = function (router, jokesServices) {
  router.get('/jokes', getJokes)
  router.post('/jokes', addJoke)
  router.get('/jokes/:jokeId', getJoke)
  router.delete('/jokes/:jokeId', deleteJoke)
  router.put('/jokes/:jokeId', editJoke)

  return router

  function getJokes(req, rsp) {
    jokesServices.getJokes(processJokeData(rsp, 'all-jokes'))
  }

  function addJoke(req, rsp) {
    console.log("Add Joke")

    req.body.id = req.params.jokeId;
    jokesServices.addJoke(req.body, processJokeData(rsp))
  }

  function getJoke(req, rsp) {
    jokesServices.getJoke(req.params.jokeId, processJokeData(rsp, 'joke'))

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


  function processJokeData(rsp, viewName) {
    return function(err, jokes) {
      if (err) {
        const httpErr = httpErrors.convertToHttpError(err)
        console.log(httpErr)
        rsp.statusCode = httpErr.status
        return rsp.json(httpErr.body)
      }
      rsp.render(viewName, {model: jokes})
    }
  }
}
