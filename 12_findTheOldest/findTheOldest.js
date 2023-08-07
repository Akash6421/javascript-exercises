    const findTheOldest = function(array) {
        return array.reduce((oldest, currentPerson) => {
            const oldestAge = calAge(oldest.yearOfBirth, oldest.yearOfDeath)
            const currentAge = calAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

            return oldestAge<currentAge?currentPerson:oldest;

        });

    };

    const calAge = function(Birth,Death){
        if(!Death){
            Death = new Date().getFullYear();
        }
        return Death - Birth;
    };

    // Do not edit below this line
    module.exports = findTheOldest;
