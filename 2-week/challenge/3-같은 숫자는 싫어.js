function solution(arr) {
    let prevElem = -1
    let newArr = []
    arr.forEach((e) => {
        if(e !== prevElem) {
            newArr.push(e)
            prevElem = e
        }
    })
    console.log(newArr);
}

solution([1,1,3,3,0,1,1])
// arr 만들자
// for문을 돌면서 