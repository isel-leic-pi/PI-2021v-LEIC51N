
module.exports = {
    INVALID_JOKE_ID: invalidJokeId,
    NOT_FOUND: notFound
}


function invalidJokeId(id) {
    return {
        code: "e1",
        error: `${id.toString()} is not a valid id`
    }
}

function notFound(id) {
    return {
        code: "e2",
        error: `${id} not found`
    }
}
