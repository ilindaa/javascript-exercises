const leapYears = function(year) {
    // leap year: div by 4, not div by 100 unless div by 400

    if( (year % 100 !== 0 || year % 400 === 0) && year % 4 === 0 ) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
