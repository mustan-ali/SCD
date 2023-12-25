function reverseArray(input) {
    let array = [];
    for (let i in input) {
        array.unshift(input[i]);
    }
    return array;
}


function reverseArrayInPlace(arr) {

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}


console.log(reverseArray(["A", "B", "C"]));
// -> ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//-> [5, 4, 3, 2, 1]