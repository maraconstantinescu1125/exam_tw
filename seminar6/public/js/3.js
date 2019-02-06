function generateCheckPrime(){
    let cache = [2, 3];
    let checkCache = (n) => {
        for(let item of cache){
            if(!(n%item)){
                return false
            }
        }
        return true;
    }
    return function(n){
        if(n<=cache[cache.length - 1]){
            return cache.indexOf(n) !== -1
        }
        else{
            for(let i = cache[cache.length - 1] + 1; i<=Math.sqrt(n);i++){
                if(checkCache(i)){
                    cache.push[i];
                }
            }
            return checkCache(n);
        }
    }
}

let checkPrime = generateCheckPrime()

console.warn(checkPrime(13))
console.warn(checkPrime(55))
console.warn(checkPrime(5))