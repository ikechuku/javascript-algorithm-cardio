const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const counts = new Map;
arr.forEach( item => {
  counts[item] = counts[item] ? counts[item] + 1 : 1;
});

console.log(counts);

// console.log(!arr[3])