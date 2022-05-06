function secret(str) {
    const temp = str.split("*");
    console.log(temp);
    const print = `<${temp[0]}></${temp[0]}>`.repeat(+temp[1]);
    return print;
}
console.log(secret("li*3"));
