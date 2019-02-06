String.prototype.format = function(specs){
    let string = this.toString()
        if(specs){
            for(let prop in specs){
                string = string.replace('{' + prop + '}', specs[prop])
            }
        }
        return string;
}

console.warn('I am a string with {a} and {b} parms'.format({a:'first', b:'second'}))