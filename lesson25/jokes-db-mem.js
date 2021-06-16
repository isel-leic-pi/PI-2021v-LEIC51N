const jokesServices = require("./jokes-services")

module.exports = {
    getJokes: getJokes,
    getJoke: getJoke
}


const jokes = [
    {
    "categories": [],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "NFxaKElARJOKRgUoYAHVBg",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/NFxaKElARJOKRgUoYAHVBg",
    "value": "You can't spell Love without L O, you can't spell is without I S, you can't spell SILO without LOIS. Chuck Norris"    
},
{
    "categories": [
        "explicit"
    ],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "AZCXmffOQ7O1ixa3WEHdTg",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/AZCXmffOQ7O1ixa3WEHdTg",
    "value": "I dont know why people make Chuck Norris jokes. chuck is just a dick, and oh hey how did you g"
},
{
    "categories": [
        "explicit"
    ],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "wEmndQnfS3-8EAGrRTHrTA",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/wEmndQnfS3-8EAGrRTHrTA",
    "value": "If he wanted to, Chuck Norris could give himself a barium enema with his own dick."
},
{
    "categories": [
        "explicit"
    ],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "4e-gBFzHQD23ez_B-Bz1nA",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/4e-gBFzHQD23ez_B-Bz1nA",
    "value": "Chuck Norris where's a black belt around the beard that he grows on his dick"
},
{
    "categories": [
        "explicit"
    ],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "P3J2ohC2Q0yxmG5LK3ggPw",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/P3J2ohC2Q0yxmG5LK3ggPw",
    "value": "Chuck Norris invented the dickslap."
},
{
    "categories": [],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "x5whniztqdancooc9w-ggg",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/x5whniztqdancooc9w-ggg",
    "value": "Chuck Norris invented the bolt-action rifle, liquor, sexual intercourse, and football-- in that order."
},
{
    "categories": [
        "explicit"
    ],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "xJwO6LwdSj2GbkMBW7FGIA",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/xJwO6LwdSj2GbkMBW7FGIA",
    "value": "Chuck Norris has his dickprint on the Hollywood Walk Of Fame"
},
{
    "categories": [
        "explicit"
    ],
    "created_at": "2020-01-05 13:42:18.823766",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "8hbrtDUcRtOKxqay1qxGpw",
    "updated_at": "2020-01-05 13:42:18.823766",
    "url": "https://api.chucknorris.io/jokes/8hbrtDUcRtOKxqay1qxGpw",
    "value": "Chuck Norris falcon punched Jonah Falcon for having such a tiny dick."
}]

function getJokes(cb) {
    cb(null, jokes)
}

function getJoke(jokeId, cb) {
    cb(null, jokes.find(joke => joke.id == jokeId))
}