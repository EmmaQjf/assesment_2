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