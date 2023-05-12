// Permutation Sequence 
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the k^th permutation sequence.
// Input: n = 3, k = 3
// Output: "213" 
// Input: n = 4, k = 9
// Output: "2314" 
// Input: n = 3, k = 1
// Output: "123"


function getPermutation(n, k) {
    const factorial = [1];
    const nums = [];
  
    // Calculate factorials from 1 to n
    for (let i = 1; i <= n; i++) {
      factorial[i] = factorial[i - 1] * i;
      nums.push(i);
    }
  
    k--; // Convert k to 0-based index
  
    let result = '';
    for (let i = n; i >= 1; i--) {
      const index = Math.floor(k / factorial[i - 1]);
      const num = nums[index];
      result += num;
  
      nums.splice(index, 1); // Remove selected number from array
      k %= factorial[i - 1]; // Update k for the next iteration
    }
  
    return result;
  }
  
  // Test the function
  console.log(getPermutation(3, 3)); // Output: "213"
  console.log(getPermutation(4, 9)); // Output: "2314"
  console.log(getPermutation(3, 1)); // Output: "123"
  