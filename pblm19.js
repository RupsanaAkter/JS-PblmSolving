// Length of Last Word 
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5 
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4. 
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6. 

function lengthOfLastWord(s) {
    // Trim any leading or trailing whitespace
    s = s.trim();
  
    // Split the string into words
    const words = s.split(' ');
  
    // Get the last word from the array and return its length
    const lastWord = words[words.length - 1];
    return lastWord.length;
  }
  
  // Test the function
  const s1 = "Hello World";
  console.log(lengthOfLastWord(s1)); // Output: 5
  
  const s2 = "   fly me   to   the moon  ";
  console.log(lengthOfLastWord(s2)); // Output: 4
  
  const s3 = "luffy is still joyboy";
  console.log(lengthOfLastWord(s3)); // Output: 6
  


  