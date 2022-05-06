function moveZeros(array) {
    let result = array.filter(element => element !== 0).
        concat(array.filter(item => item === 0));
    return result;
}

console.log(moveZeros([0, 1, null, 2, false, 1, 0]));