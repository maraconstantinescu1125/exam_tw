let sayHello = (name) => {
    console.warn(`Hello, ${name}`);
}

function fibonacci(position){
    switch (position) {
        case 0:
        case 1:
            return 1
        default:
            return fibonacci(position - 1) + fibonacci(position - 2)
    }
}

console.warn(fibonacci(5));

if(process.argv.length < 3 ){
   console.warn('usage: node 1.js') 
}
else{
    console.warn(fibonacci(parseInt(process.argv[2])))
}
