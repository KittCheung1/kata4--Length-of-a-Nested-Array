
function getLength(input){
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (Array.isArray(input[i])) {
            count+= getLength(input[i])
        }else{ count++;}
        
    }
    return count;
}
console.log(getLength([1, [2, 3]]));

function getLength3(input){
    console.log(input.flat(Infinity).length)
}


function getLength2(input){
    let count = 0;
    for (let element of input) {
        if (Array.isArray(element)) {
            count+= getLength(element)
        }else{
    
            count++;
        }
    }
    return count;
}
console.log(getLength2([1, [2, [3, [4, [5, 6]]]]]));

getLength3([1, [2, [3, [4, [5, 6]]]]]);