const sumAll = function(int1, int2) {
    let sum = 0;

    // check for errors
    if( (int1 < 0 || int2 < 0) || (typeof int1 !== "number" || typeof int2 !== "number") ) {
        return "ERROR";
    }
    
    // this assumes that int1 is min, int2 is max
    if(int1 > int2) {
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }
    
    // take 2 ints for loop from start to end (inclusive of)
    // create a sum var and add each i to it

    if(int1 < int2) {
        for(let i = int1; i <= int2; i++) {
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
