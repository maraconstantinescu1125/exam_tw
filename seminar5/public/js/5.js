function numarPrim(numar) {
    let cnt = 0;
    for(let i = 2; i<=Math.sqrt(numar); i++){
        if(numar%i === 0){
            cnt++
        }
    }
    if(cnt > 0){
        console.warn('Nu este prim');
    }else{
        console.warn('Este prim');
    }
}

numarPrim(4);