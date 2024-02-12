function outputHundredNums(start) {
    let arr = new Array(100);
    for(let i = 0; i < 100; i++) {
        arr[i] = start+i;
    }
    console.count(arr);
}
outputHundredNums(801)
outputHundredNums(901)
outputHundredNums(1001)
outputHundredNums(1101)