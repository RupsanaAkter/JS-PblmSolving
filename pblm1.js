// For inputArray[1,2,1],elementToReplace=1 and substrationElement=3 the output Should be arrayReplace(inputArray,elementToReplace,substrationElement)=[3,2,3]



function arrayReplace(inputArray,elementToReplace,substrationElement){
    inputArray.forEach((element,input) => {
        if (element===elementToReplace) {
            inputArray[input]=substrationElement
        }
    });
    console.log(inputArray);
}
arrayReplace([1,2,1],1,3)