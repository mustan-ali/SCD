let pattern = '# # # #'

for (i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log(pattern)
    }
    else if (i % 2 !== 0) {
        console.log(' ' + pattern)
    }
}