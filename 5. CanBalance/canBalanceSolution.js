// Given a non-empty array, if there is a place to split the array so that the sum of the numbers on one
// side is equal to the sum of the numbers on the other side return the length of the two arrays as an array but
// if there is no place to split the array, return -1


// canBalance([1, 1, 1, 2, 1]) → [3,2]
// canBalance([2, 1, 1, 2, 1]) → -1
// canBalance([10, 10]) → [1,1]


//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(arr) {
  var leftsum = 0;
  var n= arr.length;
  var ans = [];

  for(i=0;i<n-1;i++) {
    leftsum += arr[i];

    var rightSum = 0;

    for(j=n-1; j>i; j--){
      rightSum += arr[j];      
    }

    if (leftsum === rightSum){   
      var lefval =arr.slice(0,i+1).length; 
      var rightval = arr.slice(i+1, n).length;

      ans.push(lefval);
      ans.push(rightval);

      // console.log("can be split", ans );
     
      return ans;
    } 
    
  }
  // if it cant be split 
  // console.log("Cant be split", -1);
  return -1; 

}


canBalance([1, 2, 3, 4, 5, 6, 6, 7, 8])

module.exports = canBalance;