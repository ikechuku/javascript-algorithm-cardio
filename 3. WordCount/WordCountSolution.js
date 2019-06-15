function wordCount(arrayOfStrings) {

    const counts = {};
    arrayOfStrings.forEach( item => {
    counts[item] = counts[item] ? counts[item] + 1 : 1;
    });

    return counts;
}

// console.log(wordCount(["str", "hell", "str", "str"]))

module.exports = wordCount;