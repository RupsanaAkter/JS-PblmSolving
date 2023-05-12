// // Merge Two Sorted Lists 
// // Input: list1 = [1,2,4], list2 = [1,3,4]
// // Output: [1,1,2,3,4,4] 
// // Input: list1 = [], list2 = []
// // Output: [] 
// // Input: list1 = [], list2 = [0]
// // Output: [0] The number of nodes in both lists is in the range [0, 50].
// // -100 <= Node.val <= 100
// // Both list1 and list2 are sorted in non-decreasing order


// function mergeTwoLists(list1, list2) {
//     const mergedList = [];
//     let i = 0;
//     let j = 0;
  
//     while (i < list1.length && j < list2.length) {
//       if (list1[i] <= list2[j]) {
//         mergedList.push(list1[i]);
//         i++;
//       } else {
//         mergedList.push(list2[j]);
//         j++;
//       }
//     }
  
//     while (i < list1.length) {
//       mergedList.push(list1[i]);
//       i++;
//     }
  
//     while (j < list2.length) {
//       mergedList.push(list2[j]);
//       j++;
//     }
  
//     return mergedList;
//   }
  
//   // Test the function
//   const list1 = [1, 2, 4];
//   const list2 = [1, 3, 4];
//   console.log(mergeTwoLists(list1, list2)); // Output: [1, 1, 2, 3, 4, 4]
  
//   const list3 = [];
//   const list4 = [];
//   console.log(mergeTwoLists(list3, list4)); // Output: []
  
//   const list5 = [];
//   const list6 = [0];
//   console.log(mergeTwoLists(list5, list6)); // Output: [0]
  

// solve it easy way......

function mergeTwoLists(list1, list2) {
    return [...list1, ...list2].sort((a, b) => a - b);
  }
  
  // Test the function
  const list1 = [1, 2, 4];
  const list2 = [1, 3, 4];
  console.log(mergeTwoLists(list1, list2)); // Output: [1, 1, 2, 3, 4, 4]
  
  const list3 = [];
  const list4 = [];
  console.log(mergeTwoLists(list3, list4)); // Output: []
  
  const list5 = [];
  const list6 = [0];
  console.log(mergeTwoLists(list5, list6)); // Output: [0]
  