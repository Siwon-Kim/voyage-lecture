let arr = ['bear', 'apple', 'cat']
arr.sort((a, b) => {
    if(a < b) return 1
    else return -1
})
console.log(arr);