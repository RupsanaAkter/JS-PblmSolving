// Build Array from permulation 
// Input nums=[0,2,1,5,3,4] output=[0,1,2,4,5,3] 
// input nums=[5,0,1,2,3,4] output=[4,5,0,1,2,3] 

function buildArray(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      result.push(nums[nums[i]]);
    }
  
    return result;
  }
  
  // Test the function
  console.log(buildArray([0, 2, 1, 5, 3, 4]));
  console.log(buildArray([5, 0, 1, 2, 3, 4]));
  