module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let newArr = array.sort((a,b) => a-b);
  let newArrNoReiter = [];
  newArrNoReiter.push(newArr[0]);
   for(let i = 0; i<newArr.length+1; i++){
  	if(newArr[i] != (newArr[i+1])) newArrNoReiter.push(newArr[i+1]);
  }
  let count = 1, resultCount = 0;
  for(let i = 1; i<newArrNoReiter.length; i++){
  	if(newArrNoReiter[i] === (newArrNoReiter[i-1]+1)) count++;
  	else if(newArrNoReiter[i] === (newArrNoReiter[i-1]));
  	else{
  		if(count > resultCount) resultCount = count;
  		count = 1;
  	}
  }
  return resultCount;

}

