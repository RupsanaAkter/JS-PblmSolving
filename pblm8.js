// palindrome number 
//  input =121 output true
//  input =-121 output false 

function isPalindrome(num) {
    if (num < 0) {
      return false;
    }
  
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return num === reversed;
  }
  
  // Test the function
  console.log(isPalindrome(121)); 
  console.log(isPalindrome(-121)); 
  