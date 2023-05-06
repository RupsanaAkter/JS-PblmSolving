function sumPrimes(num) {
    var sumArr= [];
    for(var i=0;i<=num;i++){
      if(isPrime(i))
        sumArr.push(i);
    }
  
    sumArr = sumArr.reduce(function(a,b){
      return a+b;
    })
  
    return sumArr;
  }
  
  function isPrime(num) {
      if(num < 2) return false;
      for (var i = 2; i < num; i++) {
          if(num%i === 0)
              return false;
      }
      return true;
  }
  
  console.log(sumPrimes(10));
  console.log(sumPrimes(977));




// function sumPrimes(num) {
//     let primesArr = [];
//     for (let i = 2; i < num; i++){
//      let testArr = [];
//      //generate test array for each i value
//      for (let j = 2; j < i; j++){
//        testArr.push(j);
//      }
//      // test each i value against against its test array
//      if (testArr.every(value => i % value !== 0)){
//        primesArr.push(i);
//      }
//     }
//     return primesArr.reduce(((sum, num) => sum + num),0);
//    }
   
//    console.log(sumPrimes(10));
//    console.log(sumPrimes(977));








// function primeSum(num){
//     let primeTotal=0;
//     for(let i=2;i<=num;i++){
//         for(let j=2;j<=num;j++){
//             if(i===j){
//                 primeTotal += i
//             }
//             if(i%j===0){
//                 break;
//             }
//         }
       
//     }
// return primeTotal;

// }
// console.log(primeSum(10));
// console.log(primeSum(977));