
// Given a non-empty string like "Code" return a string like "CCoCodCode".


// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

function stringSplosion(str) {
    //Provide your solution\
    n = str.length;
    arr = [];
    arr2 =[];
    ans = "";

    // convert string to array
    for(i=0; i<n; i++){
        arr.push(str[i]);        
   }

    //loop through the array and add a sliced version (sliced up to the index)
    for(j=0; j<arr.length+1; j++){
    let sliced = arr.slice(0,j);

    // convert the sliced version back into string and add to ans
    ans += sliced.join("")
    // console.log(ans);
    
   }

   return ans;
    // var restring = arr.join('');

    // console.log(ans)

    // console.log(restring)
}

stringSplosion("Code")

module.exports = stringSplosion;