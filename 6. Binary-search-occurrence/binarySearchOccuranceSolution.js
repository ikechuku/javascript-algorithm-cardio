// not yet completed
function search(arr, left, right, x){
  if (right < left){
    console.log(-1)
    // return "-";
  }
  // if the element is the middle
  let mid = left + (right-left)/2;
  if(arr[mid]==x){
    console.log(mid)
    // return mid;
  }

  // if the element is smaller than the mid 
  if (arr[mid] > x) {
    return search(arr, left, mid-1, x);
  }
  // else it can only be in the right array
   return search(arr, mid+1, right, x)  
}


search([1, 2, 3, 4, 5, 6, 7, 8, 9], );

// module.exports = binarySearchOccurance;
