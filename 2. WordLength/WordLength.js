function wordLength(arr) {
    var smallCase = arr.map( (str) =>{
       return str.toLowerCase();
    })
    var filteredArr = Array.from(new Set(smallCase));

    var arrLengths = filteredArr.map(item =>{
        return item.length;
    })
    
    const m = new Map();
    for(let i=0; i<filteredArr.length; i++){
        m.set(filteredArr[i], arrLengths[i])
    }

        return m;
}

module.exports = wordLength;