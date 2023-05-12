// Input: strs = ["flower","flow","flight"]
// Output: "fl" 
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings. 

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return '';
    }
  
    let prefix = '';
    let firstStr = strs[0];
  
    for (let i = 0; i < firstStr.length; i++) {
      let currentChar = firstStr[i];
  
      for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || strs[j][i] !== currentChar) {
          return prefix;
        }
      }
  
      prefix += currentChar;
    }
  
    return prefix;
  }
  
  // Test the function
  const strs1 = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strs1)); // Output: "fl"
  
  const strs2 = ["dog", "racecar", "car"];
  console.log(longestCommonPrefix(strs2)); // Output: ""
  