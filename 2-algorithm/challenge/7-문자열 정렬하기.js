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
//return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));

solution(["abce", "abcd", "cdx"])