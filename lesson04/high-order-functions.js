function add(a, b) {
    return a + b
}


function max(a, b) {
    return a > b ? a : b
}


function executor(f, a, b) {
    return f(a, b);
}


function aggregator(...functs) {
    let x = 10
    return function (a, b) {
        let arr = [];
        for(let i = 0; i < functs.length; ++i) {
            arr[i] = functs[i](a, b)
            console.log(x)
        }
        return arr
    }
}

executor(add, 2, 3)
executor(max, 10, 20)

let agg = aggregator(add, max, add, (a, b) => a*b)
console.log(agg(2,3))     // [5, 3, 5]
