// roman to integer 
// input =III output=3
// explaination III=3
// input =LVIII output=58
// explaination L=50 V=5 III=3

function romanToInteger(roman) {
    const romanToIntMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const current = romanToIntMap[roman[i]];
      const next = romanToIntMap[roman[i + 1]];
  
      if (next && current < next) {
        result += next - current;
        i++;
      } else {
        result += current;
      }
    }
  
    return result;
  }
  
  // Test the function
  console.log(romanToInteger('III')); 
  
  console.log(romanToInteger('LVIII')); 
  console.log(romanToInteger('MD')); 
  