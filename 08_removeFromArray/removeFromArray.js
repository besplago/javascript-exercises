const removeFromArray = function (array, ...toBeRemoved) {
    return array.filter((element) => !toBeRemoved.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
