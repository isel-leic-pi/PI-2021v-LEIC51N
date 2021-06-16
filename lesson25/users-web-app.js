
const { response } = require('express')
const httpErrors = require('./errors/http-errors')

const passport = require('passport')
const expressSession = require('express-session');


module.exports = function (routers, jokesServices) {

  routers.global.use(expressSession({ secret: "Portugal campeão europeu novamente?" }))
  routers.global.use(passport.initialize())
  routers.global.use(passport.session())


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  routers.path.get('/login', loginGet)
  routers.path.post('/login', loginPost)
  routers.path.post('/logout', logout)

  return routers

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



  function serializeUser(user, done) {
    console.log("serializeUserCalled")
    console.log(user)
    done(null, { username: user.username })
  }

  function deserializeUser(user, done) {
    console.log("deserializeUserCalled")
    console.log(user)
    done(null, {
      username: user.username,
      dummy: "dummy property on user"
    })
  }
}