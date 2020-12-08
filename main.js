const readFile = require("fs").readFileSync;

array = []
const file = readFile('input.txt', 'utf-8').split("\n").forEach(data => {
    array.push(parseInt(data))
})


function checkSumPair(array, target) {
    let hash = {};
    for(let i=0;i<array.length;i++)
    {
        if(hash[target-array[i]]){
            return [hash[target-array[i]], i]
        }
        else{
            hash[array[i]] = i
        }
    }
    return -1;
}

function checkSumTriplets(array, target){
    
    for(let i=0;i<array.length;i++)
    {
        let indices = checkSumPair(array, target-array[i]);
        if(indices!== -1 && !indices.includes(i))
        {
            return [i, ...indices];
        }
    }
}

console.log(checkSumPair(array, 2020).reduce((acc, curr)=> acc*array[curr], 1));
console.log(checkSumTriplets(array, 2020).reduce((acc, curr)=> acc*array[curr], 1));