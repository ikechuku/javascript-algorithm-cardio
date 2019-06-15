

function solution(P, C) {
    //Provide Your solution here 
  let pair = Math.floor(P/2);
  let maxPlayable = C;

  if (pair <= C) {
      return pair;
  }
  else return C;
}

module.exports = solution;