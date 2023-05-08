// Matrix Diagonal Sum Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once. Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8  Input: mat = [[5]]
// Output: 5 

function diagonalSum(mat) {
    const n = mat.length;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += mat[i][i]; // Add element from the main diagonal
      sum += mat[i][n - 1 - i]; // Add element from the secondary diagonal
    }
  
    // If the matrix has an odd number of rows/columns, subtract the duplicate center element
    if (n % 2 === 1) {
      const center = Math.floor(n / 2);
      sum -= mat[center][center];
    }
  
    return sum;
  }
  
  // Test the function
  console.log(
    diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  ); // Output: 25
  
  console.log(
    diagonalSum([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ])
  ); // Output: 8
  
  console.log(diagonalSum([[5]])); // Output: 5
  