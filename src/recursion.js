// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
//if n is a negative number or 0

var factorial = function(n) {
  //base 
  //if n is strictly equal to one or 0
  if (n === 1 || n === 0) {
    //return 1
    return 1;
  } 
  //if n is less than 0
  if (n < 0) {
    //return null
    return null;
  }
  
  //recursion
  //return n multiplied by the function called with n - 1
  return n * factorial(n - 1);
 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array, num=0) {
  //base
  if (array.length === 0) {
    return num;
  }
  //recursion
 num += array[0];
   return sum(array.slice(1), num);
 };

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {

  //if n is less than 0
  if(n < 0) {
    //if n is -2 
    if (n === -2) {
       //return true
       return true;
     //else if n is -1
     } else if (n === -1) {
       //return false
       return false;
     //if it is neither -2 or -1
     } else {
       //use recursion to call the function again with n + 2
       return isEven(n + 2);
     }
  //else if n is greater than or equal to 0
  } else if (n >= 0) {
     //if n is equal to 0
     if (n === 0) {
        //return true
        return true;
     //else if n is 1
     } else if (n === 1) {
       //return false
       return false;
     //if it is neither 0 or 1
     } else {
       //use recursion to call the function again with n - 2
       return isEven(n - 2);
     }
  }
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

//I: a number
//O: sum all of integers below the given integer
var sumBelow = function(n) {
  //if n is greater than 0
  if (n > 0) {
    //base
    //if n is 1
    if (n === 1) {
      //return n minus 1
      return n - 1;
    }  
    //recursion
    //return n minus one added to the result of the function called again with one subtracted from n
    return n - 1 + sumBelow(n - 1);
    
  //else if base is less than 0
  } else if (n < 0){
    //if n is -1
    if (n === -1) {
      //return n plus one
      return n + 1;
    }  
    //recursion
    //return n plus one added to the result of the function called again with one added to n
    return n + 1 + sumBelow(n + 1);

  } else {
    return 0;
  }
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

//I: two numbers
//O: an array of numbers not including the two numbers
var range = function(x, y) {

  //if x minus y is equal to one (meaning no numbers would be included since range is excluding the start and stop values) OR if x - y is equal to 0, meaning no range exists because the values are the same value
  if (x - y === 1 || x - y === 0) {
    //return an empty array reflecting the absent value
    return [];
  }

  //if x is greater than y
  if (x > y) {
    //base
    //if x is strictly equal to y plus 1 (aka the last value y can return a defined value)
    if (x === y + 1) {
      //return an empty array, since we are excluding the last value
      return [];
    }
    
    //recursion
    //return an array containing x + 1 (excluding the first value of x). add this array to all other arrays created from running range again with x and y, adding one to x until base case is reached
    return [x - 1].concat(range (x - 1, y));

    //else y is greater than x
  } else {
      //base
      //if y is strictly equal to x plus 1 (aka the last value y can return a defined value)
      if (x === y - 1) {
        //return an empty array, since we are excluding the last value
        return [];
      }
      //recursion
      //return an array containing y - 1 (excluding the first value of y). add this array to all other arrays created from running range again with x and y, subtracting one from y until base case is reached
      return [x + 1].concat(range(x + 1, y));
  }
};



// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  
  //base
  //if exponent is 0, return 1
  if (exp == 0) return 1;
  //if 1, return base
  if (exp == 1) return base;
  //if base is less than 1, return 1
  if (base < 1) return 1;

  //recursion
  //if exponent is greater than 0
  if (exp > 0) {
    //return the base multiped by the function calling itself with base and one subtracted from exponent
    return base * exponent(base, exp - 1);
  //if its less than 0
  } else {
    //return the function calling itself with base and one added to exp divided by the base
    return exponent(base, exp + 1)/base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false


var powerOfTwo = function(num) { 
  //base
  //
  if (num === 1){
    return true;

  } else if (num < 1){
    return false;
  //recursion
  //else if num is neither
  } else {
    //return the function called with num divided by 2
    return powerOfTwo(num/2); 
  }
}

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {

//base
if (string.length === 0) {
  return '';
}

//recusion
return string[string.length - 1] + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.

var palindrome = function(string){

  //init copyStr to the string shifted to lowercase
  let copyStr = string.toLowerCase()
  
  //base case
  if (string.length === 1){
    return true;
  } 
  //second base case to include spaces
  if (string.length === 2 && string[0] === ' ' || string[1] === ' ') {
    return true;
   }
    
  //recursion
  
  return copyStr[0] === copyStr[copyStr.length - 1] ? palindrome(string.slice(1, -1)): false;
   
  }

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

//what is the process of multiplication broken down?
//multiply(2, 4) => 2 + 2 + 2 + 2

var multiply = function(x, y) {
  //base
  if (y >= 0) {
    if (y === 0 || x === 0) {
      return 0;
    //recursion
    }
    if (y === 1) {
      return x;
    }
    return x + multiply(x, y - 1);
  //base
  } else if (y < 0 && x < 0) {
     if (y === -1) {
      return -x;
    //recursion
    }
    return -x + multiply(x, y + 1);
  //base
  } else if (y < 0) {
    if (y === -1) {
      return x;
    //recursion
    }
    return x + multiply(x, y + 1);
  } 

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
  //base
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  //recursion
  return str1[0] === str2[0] ? compareStr(str1.slice(1), str2.slice(1)) : false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base
  if (str.length === 0) {
    return [];
  }
  ///recursion
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base
  if (array.length === 0) {
    return [];
  }
 //recursion
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length) {
  //base
  if (length === 0) {
    return [];
  }
  //recursion
  return [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

//I: an array and a value
//O: a number that counts the value
var countOccurrence = function(array, value, count=0) {
  
  //base
  if (array.length === 0) {
       return count;
  }

  if (array[0] === value ) {
    count += 1;
  }
  
  //recursion
  return countOccurrence(array.slice(1), value, count);
};


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = function(array, callback, output=[]) {

  //base case
  //if array.length is less than or equal to 0
  if (array.length <= 0){
    //return output
    return output
  //else 
  } else {
    //take the first item and put remaining in a separate array
    let [item, ...theRest] = array
    // create an array of output and the callback funtion used on item
    let interimArray = [...output, callback(item)]
    //recursion
    // return a recursive call 
    return rMap(theRest, callback, interimArray);
  }


};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  
  }

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

let nthFibo = function(n) {

  //base
  if (n < 0) {
    return null;
  } else if (n === 0){
    return 0;
  } else if (n <= 2) {
    return 1;
  }
  
  //recursion
  return nthFibo(n - 1) + nthFibo(n -2); 

}

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

//I: array of lowercase words
//O: array of all uppercase words

//for function capitalizeWord with one param, input
var capitalizeWords = function(input) {
  //base
  //if input array has a length of strictly 1
  if (input.length === 1) {
    //return the last remaining element placed in a new array and set to upper case
    return [input[0].toUpperCase()];
  }
  //recursion 
  //return the first element of the array set to upper case, concat it with the result of calling the function again and slicing off the first element
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)))
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

var capitalizeFirst = function(array) {
  //base
 //if array.length is strictly equal to 0
 if (array.length === 0) {
   //return an empty array
   return [];
 }
 
 //recursion
 //return the first letter of the the first element of the array capitalized added to the rest of the string set to lowercase inside of an array, and concatenated with the result of calling the function again with the first element of the array sliced off
 return [array[0].substring(0, 1).toUpperCase() + array[0].substring(1).toLowerCase()].concat(capitalizeFirst(array.slice(1)))
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}


var letterTally = function(str, obj = {}) {
  
  //base
  if (str.length === 0) {
    return obj
  }
  
  //recursion
  letterTally(str.substring(1), obj);

  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]] += 1;
  }

  return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

var compress = function(list) {

  //base
  if (list.length === 0) return [];

  //recursion
  var res = compress(list.slice(1));

  if (list[0] !== res[0]) {
    res.unshift(list[0]);
  }

  return res;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array) {
  
  //base
  if (array.length === 0) {
      return [];
  }
  
  //recursion
  var list = minimizeZeroes(array.slice(1));

  if ((array[0] === 0 ^ list[0] === 0) || array[0] !== 0) {
    list.unshift(array[0]);

  }
  return list;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array) {
   
  //base
  if (array.length === 0) return [];
  
  //recursion
  var list = alternateSign(array.slice(0, array.length-1));

  if (array.length % 2 === 0) {

    if (array[array.length - 1] > 0) {
      array[array.length - 1] = -array[array.length - 1];
    }

  } else {

    if (array[array.length - 1] < 0) {
      array[array.length - 1] = -array[array.length - 1];
    }

  }
  list.push(array[array.length - 1]);
  return list;
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = function(str) {

  //base
  if (str.length === 0) return '';
  
  //recursion
  var convertStr = numToText(str.substring(0, str.length-1));

  var stringed = '';

  switch (str[str.length-1]) {
    case '1': stringed = 'one';
      break;
    case '2': stringed = 'two';
      break;
    case '3': stringed = 'three';
      break;
    case '4': stringed = 'four';
      break;
    case '5': stringed = 'five';
      break;
    case '6': stringed = 'six';
      break;
    case '7': stringed = 'seven';
      break;
    case '8': stringed = 'eight';
      break;
    case '9': stringed = 'nine';
      break;
    default: stringed = str[str.length-1];
      break;

  }
  return convertStr + stringed;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------