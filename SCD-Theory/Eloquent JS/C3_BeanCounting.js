function countBs(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "B") {
            count++
        }
    }
    return count;
}


function countChar(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count++
        }
    }
    return count
}


console.log(countBs("BBC"));
// -> 2
console.log(countChar("kakkerlak", "k"));
// -> 4