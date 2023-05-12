// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807. 
// Input: l1 = [0], l2 = [0]
// Output: [0]  
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1;
    let q = l2;
    let curr = dummyHead;
    let carry = 0;
  
    while (p !== null || q !== null) {
      let x = p !== null ? p.val : 0;
      let y = q !== null ? q.val : 0;
  
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
  
      if (p !== null) {
        p = p.next;
      }
      if (q !== null) {
        q = q.next;
      }
    }
  
    if (carry > 0) {
      curr.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  // Test the function
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  const result = addTwoNumbers(l1, l2);
  let output = [];
  let node = result;
  while (node !== null) {
    output.push(node.val);
    node = node.next;
  }
  console.log(output); // Output: [7, 0, 8]
  