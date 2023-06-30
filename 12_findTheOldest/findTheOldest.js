const findTheOldest = function(arr) {
    const oldest = arr.reduce((a, b) => {
        let aAge = getAge(a.yearOfBirth, a.yearOfDeath);
        let bAge = getAge(b.yearOfBirth, b.yearOfDeath);
        if (aAge > bAge) {
            return a;
        } else {
            return b;
        }
    });
    return oldest;
};

function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
