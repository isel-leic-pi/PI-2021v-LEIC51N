
module.exports = {
    INVALID_UUID: invalidUuid,
    NOT_FOUND: notFound
}


function invalidUuid(uuid) {
    return {
        code: "e3",
        error: `${uuid.toString()} is not a valid uuid`
    }
}

function notFound(uuid) {
    return {
        code: "e2",
        error: `${uuid} not found`
    }
}
