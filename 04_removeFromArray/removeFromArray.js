const removeFromArray = function(arr, removedElement) {
    let a = arguments[0];
    let remArr = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] != removedElement) {
            remArr.push(a[i]);
        }
    }
    return remArr;
};

// Do not edit below this line
module.exports = removeFromArray;
