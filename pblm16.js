// Sqrt(x) 
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2. 
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned. 

// function mySqrt(x) {
//     if (x === 0) return 0;
    
//     let left = 1;
//     let right = x;
//     let result = 0;
    
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
      
//       if (mid * mid <= x) {
//         result = mid;
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
    
//     return result;
//   }
  

// solve this easy way...........
function mySqrt(x) {
    return Math.floor(Math.sqrt(x));
  }
  
  // Test the function
  console.log(mySqrt(4)); // Output: 2
  console.log(mySqrt(8)); // Output: 2
  