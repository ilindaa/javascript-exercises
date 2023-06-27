const fibonacci = function(position) {
    if (position < 0) return "OOPS";
    if (typeof position == "string" ) {
        position = parseInt(position);
    }

    let arr = [0, 1];
    
    // simplified to 1 for loop (instead of 2)
    for(let i = 0; i < position; i++) {
        let add = arr[i] + arr[i+1];
        arr.push(add);
    }
    
    return arr[position];
};

// Do not edit below this line
module.exports = fibonacci;
