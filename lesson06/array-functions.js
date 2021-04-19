const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

Array.prototype.each = function(consumer) {
    for(let i = 0; i < this.length; ++i) {
        consumer(this[i], i, this)
    }
}

Array.prototype.where = function(predicate) {
    const result = [] // 1

    for(let i = 0; i < this.length; ++i) {
        if(predicate(this[i]))  // 2
            result.push(this[i], i , this)
    }
    return result // 3
}

Array.prototype.select = function(selector) {
    const result = [] // 1

    for(let i = 0; i < this.length; ++i) {
        result.push(selector(this[i], i , this)) // 2
    }

    return result // 3
}

Array.prototype.all = function(predicate) {
    for(let i = 0; i < this.length; ++i) {
        if (!predicate(this[i])) return false // 1
    }
    return true// 2
}


Array.prototype.allR = function(predicate) {
    return this.reduce( 
        (prev, curr) => prev ? predicate(curr) : false  // 1 callback
        ,
        true// 2 initial value
    )
}

Array.prototype.any = function(predicate) {
    for(let i = 0; i < this.length; ++i) {
        if (predicate(this[i])) return true // 1
    }
    return false// 2
}

Array.prototype.anyR = function(predicate) {
    return this.reduce( 
        (prev, curr) => prev ? true : predicate(curr)  // 1 callback
        ,
        false// 2 initial value
    )
}

function consumer(e) {
    console.log(e)
}

// call each with named function
words.each(consumer)


// call each with anonymous function
words.each(function (e) {
    console.log(e)
})

// call each with an arrow function
words.each(e => console.log(e))


words.each(console.log)


// Show in console the length of all words with more than 5 chars
//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
words.filter(str => str.length > 5)
     .map(str => str.length)
     .forEach(console.log)

words.where(str => str.length > 5)      // 1 - array de String
     .select(str => str.length)         // 1 - array de Number
     .each(console.log)