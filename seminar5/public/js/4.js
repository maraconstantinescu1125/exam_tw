let sampleText = 'the quick grown fox jumps over the lazy dog'

let occurances = (text) => {
    let result = {}
    let spaces = 0;
    for( let letter of text ){
        if(letter === ' '){
            continue
            spaces++
        }
        
        if(word in result){
            result.word++
        }else{
            result[word] = 1
        }
    }
    for(let key in result){
        result[key] = result[key] / (text.length - spaces)
    }
    return result
}
