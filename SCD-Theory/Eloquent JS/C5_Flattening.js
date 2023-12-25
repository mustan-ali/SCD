function flattenArray(arr) {
    return arr.reduce((flattened, current) => flattened.concat(current));
}


console.log(flattenArray([ [1], [2, 3], [4, 5, 6] ]))
