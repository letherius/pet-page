
function fizzbuzz (n){

    for(let i = 0; i<=n; i++){
        if(i % 3 == 0 && i % 5==0){
            console.log('fizzbuzz')
        } else if(i === 3){
            console.log('fizz')
        }else if(i === 5){
            console.log('buzz')
        }else
        console.log('not a number')
    }
};
    console.log(fizzbuzz(20));