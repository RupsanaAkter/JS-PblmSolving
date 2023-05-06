// Give a sequence in integer Array 
// Example 
// For sequence=[1,2,3,1] output =false 
// For sequence=[1,2,3] output=true 
// ...NO HINTS...


function sequence(inputArray){
    for(let i=1;i<inputArray.length;i++){
if(inputArray[i]<inputArray[i-1]){
return false
}
    }
    return true
}
console.log(sequence([1,2,3,1]));
console.log(sequence([1,2,3]));