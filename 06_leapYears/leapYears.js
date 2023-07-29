const leapYears = function(leapyear) {
    if (leapyear % 4 === 0){
        if(leapyear % 100 ===0 && leapyear % 400 !== 0){
            return false;
        }
        return true;
    }
    return false;


};

// Do not edit below this line
module.exports = leapYears;
