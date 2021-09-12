const tempFunction = (num) => {
    let tempIndex = num;
    let sum = num;

    while(tempIndex > 0) {
        tempIndex = Math.floor(tempIndex/2)
        sum = sum + tempIndex
        console.log(num, sum)
    }
}
tempFunction(25)
