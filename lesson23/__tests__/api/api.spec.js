const frisby = require('frisby');
const SERVER_PORT = 1905
const serverBase = `http://localhost:${SERVER_PORT}/`
const Joi = frisby.Joi


const { spawn } = require('child_process');

let server = null


beforeAll((done) => {

  setTimeout(done, 5000)
  // start the server
  console.log(`Staring the server to execute the API tests ${server}`)
  server = spawn(`npm`, [`start`, `${SERVER_PORT}`], {})
  console.log(`Started the server ${server}`)

  server.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  server.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  server.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  server.on('error', (err) => {
    console.error(`Failed to start subprocess: ${err}`);
  });
});


afterAll(() => {
  // stop the server
  console.log("Stopping the server...")
  if(server)
    server.kill('SIGHUP')
});


test('verify jokes server server is running', function () {
  return frisby.get(serverBase)
    .expect('status', 200);
});

describe('GET all jokes', () => {
  test('should get all tasks', () => {
    return frisby.get(`${serverBase}jokes`)
      .expect('status', 200)
      .expect('header', 'Content-Type', 'application/json; charset=utf-8')
      .expect('jsonTypes', '*', {
        'id': Joi.string().required(),
        'url': Joi.string().required(),
        'value': Joi.string()
      })
  })
})


describe('GET a joke', () => {
  const jokeId = "AZCXmffOQ7O1ixa3WEHdTg"
  test('should get an existing joke', () => {
    
    return frisby.get(`${serverBase}jokes/${jokeId}`)
      .expect('status', 200)
      .expect('header', 'Content-Type', 'application/json; charset=utf-8')
      .expect('jsonTypes', {
        'id': jokeId,
        'url': frisby.Joi.string().required(),
        'value': frisby.Joi.string()
      })
  })
  test('should get a 400 for an invalid joke id', () => {
    return frisby.get(`${serverBase}jokes/1111111`)
      .expect('status', 400)
      .expect('header', 'Content-Type', 'application/json; charset=utf-8')
      .expect('jsonTypes', {
        'description': frisby.Joi.string().required()
      })
  })

  test('should get a 404 for a non existing joke', () => {
    return frisby.get(`${serverBase}jokes/AZCXmffOQ7O1ixa3WEHdTh`)
      .expect('status', 404)
      .expect('header', 'Content-Type', 'application/json; charset=utf-8')
      .expect('jsonTypes', {
        'description': frisby.Joi.string().required(),
      })
  })
})



