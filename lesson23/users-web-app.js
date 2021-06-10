
const { response } = require('express')
const httpErrors = require('./errors/http-errors')

module.exports = function (router, jokesServices) {
  
  router.get('/login', loginGet)
  router.post('/login', loginPost)
  router.post('/logout', logout)

  return router
  
  function loginGet(req, rsp) {
    rsp.render("login")
  }

  function loginPost(req, rsp) {
    console.log("body:", req.body)
    rsp.end("login post")
  }

  function logout(req, rsp) {
    console.log("body:" + req.body)
    rsp.end("logout")
  }
} 