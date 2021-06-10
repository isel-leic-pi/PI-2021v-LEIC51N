

const services = require('../../jokes-services')

const jokesData = require('../../jokes-db-mem')
const jokesServices = require('../../jokes-services')(jokesData)



describe('Get Jokes test', () => {
  test('Should get all jokes', done => {
    jokesServices.getJokes(processJokes)

    function processJokes(err, jokes) {
      expect(err).toBeFalsy()
      expect(jokes.constructor).toBe(Array)
      expect(jokes.constructor).toBe(Array)
      expect(jokes.length).toBe(8)

      jokes.forEach(testJoke)

      done()
    }
  })

})

describe('Get Joke test', () => {
  test('Should get an existing joke', done => {
    jokesServices.getJoke("AZCXmffOQ7O1ixa3WEHdTg", processJoke)

    function processJoke(err, joke) {
      expect(err).toBeFalsy()
      testJoke(joke)

      done()
    }
  })

  test('Should get an error for an invalid joke Id', done => {
    const jokeId = 'non existing id'
    jokesServices.getJoke(jokeId, processJoke)

    function processJoke(err, jokes) {
      expect(err).toBeTruthy()
      expect(jokes).toBeFalsy()
      expect(err.code).toBe('e1')
      expect(err.error).toBe(`${jokeId.toString()} is not a valid id`)

      done()
    }
  })

  test('Should get an error for a non existing joke', done => {
    const jokeId = "AZCXmffOQ7O1ixa3WEHdTh"
    jokesServices.getJoke(jokeId, processJoke)

    function processJoke(err, jokes) {
      expect(err).toBeTruthy()
      expect(jokes).toBeFalsy()
      expect(err.code).toBe('e2')
      expect(err.error).toBe(`${jokeId.toString()} not found`)

      done()
    }
  })
})


/// Auxiliary functions

function testJoke(joke) {
  expect(joke).toBeTruthy()
  expect(joke.id).toBeDefined()
  expect(joke.value).toBeDefined()
}