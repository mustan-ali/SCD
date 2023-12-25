function every(arr, predicate) {
    var result = true

    arr.forEach(function (e) {
        if (!predicate(e)) {
            result = false
        }
    })

    return result;
}


console.log(every([1, 3, 5], n => n < 10));
// -> true
console.log(every([2, 4, 16], n => n < 10));
// -> false
console.log(every([], n => n < 10));
// -> true