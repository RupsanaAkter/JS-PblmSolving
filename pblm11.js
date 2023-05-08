
//  Richest Customer Wealth Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.  Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10. solve it by js


function maximumWealth(accounts) {
    let maxWealth = 0;
  
    for (let i = 0; i < accounts.length; i++) {
      let currentWealth = 0;
      
      for (let j = 0; j < accounts[i].length; j++) {
        currentWealth += accounts[i][j];
      }
  
      maxWealth = Math.max(maxWealth, currentWealth);
    }
  
    return maxWealth;
  }
  
  // Test the function
  console.log(maximumWealth([[1,2,3],[3,2,1]])); // Output: 6
  console.log(maximumWealth([[1,5],[7,3],[3,5]])); // Output: 10
  