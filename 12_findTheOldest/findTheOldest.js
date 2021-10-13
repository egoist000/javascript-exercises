const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
      const oldestPersonAge = calcAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
      const currentAge = calcAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      return oldestPersonAge < currentAge ? currentPerson : oldestPerson
    })
};
  
const calcAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
