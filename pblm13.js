// Two Sum Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. Input: nums = [3,2,4], target = 6
// Output: [1,2] Input: nums = [3,3], target = 6
// Output: [0,1] 


function twoSum(nums, target) {
    const complements = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (complements.hasOwnProperty(complement)) {
        return [complements[complement], i];
      }
  
      complements[nums[i]] = i;
    }
  
    return [];
  }
  
  // Test the function
  console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); // Output: [0, 1]
  