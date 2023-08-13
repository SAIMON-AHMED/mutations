/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  let flag = false;
  arr = arr.map(element => element.toLowerCase());  // making all the letter to lowercase to ignore case sensitivity
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1].substring(i,i+1)) >= 0) {  // checking second string letter in first string letter
      flag = true;
    } else {
      return false;
    }
  }
  return flag;
}

console.log(mutation(["hello", "hey"]));  // prints false
console.log(mutation(["Alien", "lien"]));  // prints true
console.log(mutation(["Hello", "hello"]))  // prints true
