function highestWithRest(...arrArg) {
    let highest = arrArg[0];
    arrArg.forEach((value, i, array) => {
        if (highest < array[i]) {
            highest = array[i];
        }
    })
    return highest;
}

console.log(highestWithRest(5,2,8,3,65,34,65,23));

function highestWithArguments() {
    let highest = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (highest < arguments[i]) {
            highest = arguments[i];
        }
    }
    return highest;
}

console.log(highestWithArguments(5,2,8,3,65,34,65,23,345,8654,2,88,35,0));