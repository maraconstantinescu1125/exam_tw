let map = (a, f) =>{
    let result = []
    for(let i=0;i<a.length; i++){
        if(f.length === 1){
            result.push(f(a[i]))
        }
        else{
            result.push(f(a[i], i))
        }
    }
    return result
}

let sampleArray = [1,2,3,4,5]
let sampleFunction = (x) => x*2

console.warn(map(sampleArray, sampleFunction))

console.warn(map(sampleArray, (e, i) => `${e} at index ${i}`))