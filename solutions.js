//********* Verbal Questions********
/*
1. What is the difference between a parameter and an argument? 
    a parameter is the variable when a function is declared.
    an argument is the value you put when you call the function.

2. Within a function, what is the difference between return and console.log?
    return -- return back a value after the function is called and often this value is saved in a variable to be used and manipulated later.
    console.log only prints out the value.
*/


//********* Verbal Questions********
//Palindrome 
const IsPalindrome = (string) => {
    const LowerCaseString = string.toLowerCase();
    const reversed = LowerCaseString.split().reverse().join('');
   return (reversed === LowerCaseString)? true: false
  }
  
console.log(IsPalindrome('apa'))


//Sum Array
const SumArray = (array) => {
    let sum = 0;
    for (let element of array) {
      sum += element
    }
    return sum
  }
  
  console.log(SumArray([1, 2, 3, 4, 5]))


// Prime numbers
const IsPrimeNumber = (integer) => {
    if (integer <= 1) return false;
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) return false
    }
    return true
  }
  
console.log(IsPrimeNumber(4))

//Calculate the Cube
const CalculateCube = (num) => {
    return num * num * num
  }
  
  console.log(CalculateCube(2))
  


//Is it Vowel
const IsVowel = (character) => {
    vowels = ["a", "e", "i", "o", "u"]
    return vowels.includes(character.toLowerCase()) ? true : false
  }
  
console.log(IsVowel('e'))

//Get Multiple Lengths
const GetLengths = (arr) => {
    return arr.map((string) => string.length)
  }
console.log(GetLengths(['i', 'word', 'noodle']))

//GetTwoLengths
const GetTwoLengths = (str1, str2) => {
    return [str1.length, str2.length]
  }
  
  console.log(GetTwoLengths("hello", "Emma"))

//Maximum of Three numbers
const MaxNumbers = (num1, num2, num3) => {
    let array = [num1, num2, num3]
    return Math.max(...array)
  }
  
console.log(MaxNumbers(48, 55, 99))

//Transmogrify the numbers
const TransmogrifyNums = (num1, num2, num3) => {
    return (num1 * num2) ** num3
  }
  
  console.log(TransmogrifyNums(2, 3, 4))

//Print Longest Word
function longer(string1, string2) {
    return (string1.length >= string2.length) ? string1 : string2
  }
  const longestWord = (array) => {
    return array.reduce(longer)
  }
console.log(longestWord(['I', "long", "we"]))


//Project Euler Problem 2
//// limit means how many fibanacci number we want to show/calculate
const SumOfFibonacci = (limit) => {
  let first = 0;
  let second = 1;
  let i = 1
  let sum = 0
   //if (limit == 1 || limit ==2) return 0
  while (i <= limit) {
    if (first % 2 === 0) {
      sum = sum + first
    }
    let current = first + second;
    first = second;
    second = current;
    i++;
  }
  return sum
}

/*
limit means find all the fibanacci number within the limit

const SumOfFibonacci = (limit) => {
  let first = 0;
  let second = 1;
  let i = 2
  let sum = 0
  let array = [first, second]
  if (limit === 2 || limit === 3) {
    return 2;
  }
  while (i <= limit && limit > 3) {
    array.push(array[i - 1] + array[i - 2])
    if (array[i] % 2 === 0) {
      sum = sum + array[i]
    }
    if (array[i] >= num) {
      return sum
    }
    i++;
  }
}
*/
console.log(SumOfFibonacci(5))

//  Needle In The Haystack 
const NeedleInTheHaystack = (arr) => {
    const indexOfNeedle = arr.indexOf('needle')
    return `The index of the needle is ${indexOfNeedle}`
  }
  
  console.log(NeedleInTheHaystack(['pizza', 'smoothie', 'burger', 'needle']))

//Sum of Positives
  const SumPositive = (arr) => {
    const positives = arr.filter((num) => num > 0)
    const sum = positives.reduce((total, num) => total + num, 0)
    return sum
  }
  console.log(SumPositive([2,-2,5,7,-1]))
  



  // ***** FREQUENCY COUNTER *********

// **** questions 1: Valid Anagram
// Check Lengths: If the two strings have different lengths, they cannot be anagrams, return false.
// Create Frequency Counters: Initialize two objects to count the frequencies of each letter in both strings.
// Populate the First Counter: Iterate through the first string, increasing the count for each letter in the corresponding object.
// Populate the Second Counter: Iterate through the second string, doing the same.
// Compare Counters: Iterate through one counter object, and for each letter, check if the letter exists in the second counter with the same frequency. If not, return false.
// Return True: If all letters match in frequency, return true.
function ValidAnagram(str1, str2) {
  if (!str1.length == str2.length) { return false }
  const fq = {}
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    fq[letter] ? fq[letter] += 1 : fq[letter] = 1
    //
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    if (!fq[letter]) {
      return false
    } else {
      fq[letter] -= 1
    }
  }
  return true
}

console.log(ValidAnagram("apple", "elepa"))

// ******Question 2: Same Frequency
// solutions:
// convert the numbers to string
// check lengths: check the length of the string is not the same, return false
// initiate a frequency counter by iterating over each digit of the first number.
// populate the first number/string 
// populate the second number and check whether the digit values are the same
// return true if the frequencies match, otherwise return false.

const IsSameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let fc = {};
  for (let i = 0; i < str1.length; i++) {
    let digit = str1[i]
    fc[digit] ? fc[digit] += 1 : fc[digit] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    let digit = str2[i]
    if (!fc[digit]) {
      return false
    } else {
      fc[digit] -= 1
    }
  }
  return true
}

console.log(IsSameFrequency(182, 281))


// ******Question 3: Are There Duplicates
// solutions:
// create frequency counter
// populate the argument 
// is the object.values is bigger than 1, there is duplicates
// return trueif any duplicates are found, otherwise return false.

const areThereDuplicates = (...args) => {
  let fc = {}
  for (let i = 0; i < args.length; i++) {
    let arg = args[i]
    fc[arg] ? fc[arg] += 1 : fc[arg] = 1
    if (fc[arg] > 1) {
      return true
    }
  }
  return false
}

console.log(areThereDuplicates('ab', 'bcc', 'bcc', 'ab'))


// ********Sliding Window*********

// ****Example: MaxSubarraySum
//solution:
//edge case check  n > arr.length, return null
//initial sum calculation  maxSum === -infinity
//sliding the window 
//      1) loop through the array,
//      2) check the sum of the n elements, arr.slice(i.n+i)
//       3) compare the sum with the maxSum, update maxSum
// return maxSum 

const MaxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = -Infinity
  let maxArray = []
  for (let i = 0; i < arr.length; i++) {
    let total = 0
    arr.slice(i, i + n).forEach(num => {
      total += num
    })
    if (total > maxSum) {
       return maxSum = total;
       return maxArray = arr.slice(i, i + n)
    }
  }
  return [maxSum, [...maxArray]]
}

console.log(MaxSubarraySum([1, 2, 3, 4, 5, 1], 3))




// ******Question 1: MinSubArrayLen
// solutions
// edge case, the sum of array is smaller than integer, return 0
// loop though the array by length 1, 2, 3..(n)..
// sliding window
// 1) find a section of i : arr.slice(i,i+n)
//   2) find the sum of the section : for each 
//   3) compare the sum and the positive integer: return n if the sum is bigger than the positive integer
// return false outside of the loop if no sum is bigger than the positive integer 

// define two pointers of the array, minLength, and sum
// expand the window by moving the end point, adding the value to the sum unitl the sum is greater or equal to the integar
//Once the sum is greater than or equal to the target, try to shrink the window from the beginning to find the smallest subarray by moving the start pointer forward and subtracting values from the sum.
//Update the minimum length each time a smaller subarray that satisfies the condition is found.
//Return the minimum length if found; otherwise, return 0.

function minSubArrayLen(arr, x) {
  let start = 0;
  let end = 0;
  let n = arr.length
  let minLength = n + 1
  let sum = 0;
  while (end <= n) {
    if (sum < x) {
      sum = sum + arr[end]
      end++
    } else if (sum >= x){
      minLength = max.Min(minLength, end - start )
      sum = sum - arr[start]
      start ++
    } else {
      break;
    }
  }
  return minLength = n + 1? 0: minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 0,1], 7))


// *** FindLongestSubstring
// the longest substring with all distinct characters
//
// findLongestSubstring('thisisawesome')should return 6.
// change the string to the array
//define the longestArray and subArray
//define the start and end point
// iterate through the array when the end point is less than the array length
// if array does not include the character, push character into the new subArray and update the longestArray if the new subArray is longer, then move the end one forward
//if array includes the character, find the index of the character and update the start point of the subArray and update the subArray by removing all the characters before the index and the character with slice. 
//Return the longest length found.

const findLongestSubstring = (str) => {
  const array = str.split('')
  let start = 0;
  let longest = 0
  let end = 0;
  let subArray = []

  while (end <= array.length) {
    if (!subArray.includes(array[end])) {
      subArray.push(array[end]);
      if (subArray.length > longest) {
        longest = subArray.length
      }
      end++
    } else if (subArray.includes(array[end])) {
      // if (subArray.length > longest) {
      //   longest = subArray.length
      // }
      start = subArray.indexOf(array[end])
      subArray = subArray.slice(start + 1)
    } else {
      break;
    }
  }
  return longest
}
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring(''))


// ******** multiple pointers 
// Example: SumZero
/*
Solution Steps:

Pointer Initialization: Initialize two pointers, one at the beginning of the array (left) and one at the end (right).
Iterate with Condition: While the leftpointer is less than the rightpointer:

Calculate Sum: Calculate the sum of the values at the two pointers.
Sum Zero Check: If the sum is 0, return the pair of values as they are the first pair to sum to zero.
Move Pointers Based on Sum:
If the sum is less than 0, move the leftpointer up (increment) to increase the sum.
If the sum is greater than 0, move the rightpointer down (decrement) to decrease the sum.
No Pair Found: If the loop ends without finding a pair, return undefined.
*/

function SumZero(arr) {
  let left = 0;
      let right = arr.length - 1;

      while (left < right) {
          let sum = arr[left] + arr[right];
          if (sum === 0) {
              return [arr[left], arr[right]];
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }

      return undefined;
}

/*
Question 1: Count Unique Values

Solution steps:
1. define an empty array and start  point
2. loop through the array and move the start point
3. if the array does not have the element arr[start], push into the array
4 if the array has the element , skip and move to the next one
5 return the array.length
*/

const countUniqueValues = (arr) => {
  let start = 0;
  let uniqueArr = [];
  while (start < arr.length) {
    if (!uniqueArr.includes(arr[start])) {
      uniqueArr.push(arr[start])
      start++
    } else {
      start++
    }
  }
  return uniqueArr.length
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))


/*
Question 2: Average Pair
1.defineb left and right point
2. iterate with condition: while the left pointer is less than right pointer
  1)check the avarage of the values at the two pointers
  2)if the average matches the given average, return true
  3) move points based on Sum
   if the average is smaller than the given average. move the left pointer to increase
    if the average is greater than the given average. move the righter pointer to decrease

3 no pair found, return false
*/
const averagePair = (arr, n) => {
  let left = 0;
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] + arr[right] === n * 2) {
      return true
    } else if (arr[left] + arr[right] < n * 2) {
      left++
    } else {
      right--
    }
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))




// ******** divide and conquer
/*
Question 2: Pow(x, n)
solutions:
1. edge case: if n equals to 0, return 1
2. if n is negative, convert the n into -n and convert x to be 1/x
3. Divide and Conquer: 
   base case 
  1) declare the base condition: if the n equals to 1, it should return the value of x
   recursive 
  2) declare two variables: one is left half of the n(use the Math.floor to deal with the fraction), the other is the right half of the n
  3) make the recursive call for the left half of the n and recursive call for the right half of the n.
*/

const pow = (x, n) => {
  if (n < 0) {
    n = -1 * n
    x = 1 / x
  }
  if (n == 0) {
    return 1
  }
  if (n <= 1) {
    return x
  }

  let leftHalf = Math.floor(n / 2)
  let rightHalf = n - leftHalf

  return pow(x, leftHalf) * pow(x, rightHalf)
}



console.log(pow(2, 10))
console.log(pow(0, 0))
console.log(pow(3, -2))
console.log(pow(2, 2))