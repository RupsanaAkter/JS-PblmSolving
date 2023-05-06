// 1) write a function that returns sum of two function...
// 2) Write a function that returns sum of all numbers regardless of # of params....

// Example... 
// For params1=1 And params2=2 the output Should be Add (params1,params2)=3.. 

// ...HINTS... 
// **Arithmetic oparetors
// **Rest opraretors
// **ForEach 

function sum(params1,params2){
    return params1+params2;
}

console.log(sum(1,2));

function totalSum(...params1){
    let total=0;
    params1.forEach(perElement=>{
        total += perElement;
    });
    return total;
}
console.log(totalSum(1,2,3,4));