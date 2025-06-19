const findTheOldest = function (people) {
  let oldestPersonIdx = 0
  for (let personIdx = 0; personIdx < people.length; personIdx++) {
    let personAYearOfDeath = people[oldestPersonIdx].yearOfDeath
    let personBYearOfDeath = people[personIdx].yearOfDeath

    if (personAYearOfDeath === undefined) {
      personAYearOfDeath = new Date().getFullYear()
    }

    if (personBYearOfDeath === undefined) {
      personBYearOfDeath = new Date().getFullYear()
    }

    const personAgeA = personAYearOfDeath - people[oldestPersonIdx].yearOfBirth
    const personAgeB = personBYearOfDeath - people[personIdx].yearOfBirth
    if (personAgeA < personAgeB) {
      oldestPersonIdx = personIdx
    }
  }
  return people[oldestPersonIdx]
}

// Do not edit below this line
module.exports = findTheOldest
