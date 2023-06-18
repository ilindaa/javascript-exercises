const removeFromArray = function(array, ...args) {
    let normArr = args.sort(); // turn it into a sorted normal array to properly splice
    for(let i = 0; i < array.length; i++) {
        for(let arg of normArr) {
            if(array[i] === arg) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
