// Rows=5
// coloum=4
// * * * *
// * * * *
// * * * *
// * * * *
// * * * * 

function printRectangularPattern(rows, columns) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= columns; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Test the function
  printRectangularPattern(5, 4);
  





// Hollow rectangule pattern 
// Rows =5
// coloums=4
// * * * *
// *     *
// *     *
// *     *
// * * * * 

function printHollowRectangularPattern(rows, columns) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= columns; j++) {
        if (i === 1 || i === rows || j === 1 || j === columns) {
          row += '* ';
        } else {
          row += '  ';
        }
      }
      console.log(row);
    }
  }
  
  // Test the function
  printHollowRectangularPattern(5, 4);
  




// Inverted half piramid
// n=5 , n to 1, "*"
// * * * * *
// * * * *
// * * * 
// * * 
// * 

function printInvertedHalfPyramid(n) {
    for (let i = n; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Test the function
  printInvertedHalfPyramid(5);
  
