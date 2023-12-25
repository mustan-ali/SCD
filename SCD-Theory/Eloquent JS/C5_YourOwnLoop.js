function loop(value, testFn, updateFn, bodyFn) {
    for (let i = value; testFn(i); i = updateFn(i)) {
        bodyFn(i);
    }
}


loop(3, n => n > 0, n => n - 1, console.log);
// Output:
// 3
// 2
// 1