//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  //Type your solutions here
  let high = array.length-1;
  let low = 0;
  let mid = 0;
  const obj = {};
  let count = 0;
  
  while (low <= high) {
    count++;
    mid = Math.floor((high + low)/2)
    
    // if middle == value being searched
     if(array[mid] == number){
      // return the value
      obj["index"] = array.indexOf(number) ;
      obj["count"] = count;
      return obj;
    }    
    else if( number > array[mid]){
      // move the low up one
      low = mid + 1
    }
    else{
      //move the high down one
      high = mid - 1;
    }
  } 
    obj["index"] = array.indexOf(number) ;
    obj['count'] = count;
    console.log(obj);

    return obj;
}

binarySearch([0, 5, 10, 15, 20, 22, 30, 35, 40], 32) ;

module.exports = binarySearch;