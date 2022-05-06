function originalValue(array) {
    while (Array.isArray(array)) {
        array = [...array][0];
    }
    return array;
}
let arr1 = [[[[[[[[[[[[3]]]]]]]]]]]];
console.log(originalValue(arr1));