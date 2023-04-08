
function solution(strings, n) {
    strings.sort((a, b) => {
        // return -1: swap
        if (a[n] < b[n]) {
            return -1
        } else if (a[n] > b[n]) {
            return 1
        } else {
            if (a > b) {
                return 1
            } else {
                return -1
            }
        }
    })
    console.log(strings);
}

solution(["abce", "abcd", "cdx"])