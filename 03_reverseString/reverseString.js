const reverseString = function(string) {
    const arr = string.split("");
    const revArr = arr.reverse();
    let str = revArr.join("");
    return str;
    /*
    const arr = string.split("");
    const revArr = arr.reverse();
    let str = "";
    for(let i = 0; i < revArr.length; i++) {
        str += revArr[i];
    }
    return str;
    */
};

// Do not edit below this line
module.exports = reverseString;
