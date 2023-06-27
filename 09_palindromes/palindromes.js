const palindromes = function (str) {
    // what i could do is cut the punctuation out in the string
    // so like commas, periods, exclamation marks, spaces
    // save that into a new str
    // also set the new str to all lowercase so that case doesn't matter
    const lowercaseStr = str.toLowerCase();
    let arr = lowercaseStr.split(' ').join('').split(''); // splits on spaces, joins, and then splits into letters

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes(",") || arr[i].includes(".") || arr[i].includes("!")) { // removes the punctuation and spaces by splicing 1 element from the index
            arr.splice(i, 1);
        }
    }

    let forward = arr.join('');
    let reverse = arr.reverse().join('');

    if(forward === reverse) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
