function arrayToList(arr) {
    let list = null;
    for (let i = 0; i < arr.length; i++) {
        list = { value: arr[i], rest: list };
    }

    return list;
}


function listToArray(input) {
    let arr = [];
    let current = input;
    while (current !== null) {
        arr.push(current.value);
        current = current.rest;
    }
    return arr
}


function nth(list, index){
    let count = 0
    while (list !== null && count < index) {
        list = list.rest;
        count++
    }
    return list ? list.value : 'Data Not Found';
}



function prepend(value, rest) {
    return { value, rest };
}


console.log(arrayToList([10, 20]));
// -> {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// -> [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// -> {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// -> 20