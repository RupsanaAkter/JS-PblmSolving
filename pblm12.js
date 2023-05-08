// Running Sum of 1d Array  Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4] Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]. Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17] solve it by js  


function runningSum(nums) {
    const runningSum = [];
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      runningSum.push(sum);
    }
  
    return runningSum;
  }
  
  // Test the function
  console.log(runningSum([1, 2, 3, 4])); // Output: [1, 3, 6, 10]
  console.log(runningSum([1, 1, 1, 1, 1])); // Output: [1, 2, 3, 4, 5]
  console.log(runningSum([3, 1, 2, 10, 1])); // Output: [3, 4, 6, 16, 17]
  