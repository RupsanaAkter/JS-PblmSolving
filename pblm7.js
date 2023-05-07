// Minimum sum of four digit Number after splitting digits 
//   input num=2932 output=52
// sum possible pairs [new1,new2] are [29,32],[293,2]
//   input num=4009 output=13
// sum possible pairs [new1,new2] are [40,09],[400,9]



function findMinimumSum(num) {
    const digits = Array.from(String(num), Number);
    digits.sort((a, b) => a - b);
  
    const pair1 = digits[0] * 10 + digits[3];
    const pair2 = digits[1] * 10 + digits[2];
  
    return pair1 + pair2;
  }
  
  // Test the function
  console.log(findMinimumSum(2932)); 
  console.log(findMinimumSum(4009)); 