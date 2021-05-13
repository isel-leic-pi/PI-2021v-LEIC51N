const jokesServices = require("./jokes-services")


module.exports = {
    getJokes: getJokes,
    getJoke: getJoke,
    addJoke: addJoke,
    deleteJoke: deleteJoke,
    editJoke: editJoke
}

function getJokes(req, rsp) {
  jokesServices.getJokes(processJokes)


  function processJokes(err, jokes) {
    if(err) {
      rsp.status = 500
      return rsp.end(`Error ocurred ${err}`)
    }

    rsp.json(jokes)
  }
}

function addJoke(req, rsp) {
  rsp.send("Add Joke")
}


function getJoke(req, rsp) {
  jokesServices.getJoke(req.params.jokeId, processJoke)

  function processJoke(err, joke) {
    if(err) {
      rsp.status = 500
      return rsp.end(`Error ocurred ${err}`)
    }

    
    rsp.json(joke)
  }
}
function deleteJoke(req, rsp) {
  rsp.send(`Delete Joke ${req.params.jokeId}`)
}

function editJoke(req, rsp) {
  rsp.send(`Edit Joke ${req.params.jokeId}`)
}

