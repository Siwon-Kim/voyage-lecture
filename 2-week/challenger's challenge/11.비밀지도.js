function convertToBinary(len, n) { // decimal을 binary로 변환시키는 함수 
    let binaryResult = ""
    for(let i = 0; i < len; i++) {
        binaryResult += String(n % 2)
        n = Math.floor(n / 2)
    }
    binaryResult = binaryResult.split("").reverse().join("")
    return binaryResult
}

function solution(n, arr1, arr2) {
    let answer = []
    arr1.forEach((e, i) => {
        let answerStr = ""
        let arr1Binary = convertToBinary(n, e)
        let arr2Binary = convertToBinary(n, arr2[i])
        for(let j = 0; j < n; j++) {
            if(arr1Binary[j] == 0 && arr2Binary[j] == 0) {
                answerStr += " "
            } else {
                answerStr += "#"
            }
        }
        answer.push(answerStr)
    })
    return answer
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
// ["#####","# # #", "### #", "# ##", "#####"]