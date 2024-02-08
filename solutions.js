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

