// // Add Binary 
// // Input: a = "11", b = "1"
// // Output: "100" 
// // Input: a = "1010", b = "1011"
// // Output: "10101" 

// function addBinary(a, b) {
//     let carry = 0;
//     let result = '';
  
//     let i = a.length - 1;
//     let j = b.length - 1;
  
//     while (i >= 0 || j >= 0 || carry > 0) {
//       const sum = (i >= 0 ? parseInt(a[i]) : 0) + (j >= 0 ? parseInt(b[j]) : 0) + carry;
//       result = (sum % 2) + result;
//       carry = Math.floor(sum / 2);
  
//       i--;
//       j--;
//     }
  
//     return result;
//   }
  
//   // Test the function
//   const a = "11";
//   const b = "1";
//   console.log(addBinary(a, b)); // Output: "100"
  
//   const c = "1010";
//   const d = "1011";
//   console.log(addBinary(c, d)); // Output: "10101"
  

// solve it easy way......

function addBinary(a, b) {
    // Convert binary strings to decimal integers
    const num1 = parseInt(a, 2);
    const num2 = parseInt(b, 2);
  
    // Perform addition
    const sum = num1 + num2;
  
    // Convert sum back to binary string
    const binarySum = sum.toString(2);
  
    return binarySum;
  }
  console.log(addBinary("11", "1"));     // Output: "100"
  console.log(addBinary("1010", "1011")); // Output: "10101"
    