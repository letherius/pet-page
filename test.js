// let i = 99;
// while (i>0) {
//     console.log(i + " bottles of beer on the wall");
//     i -= 1;
//     if (i==1 && i==1){
//         break;
//     } else if (condition){

//     } else {
//         return console.log("not a number")
//     }
// }

//given an integer n, return a string array

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// i = 3
// i=5
// i % 3 == 0
// i % 5 == 0

// 0 == true
// 1 == false


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