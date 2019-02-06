let sampleText = 'the quick grown fox jumps over the lazy dog'

let occurances = (text) => {
    let words = text.split(' ')
    let result = {}
    for( let word of words ){
        if(word in result){
            result.word++
        }else{
            result[word] = 1
        }
    }
    return result
}

console.warn(occurances(sampleText))