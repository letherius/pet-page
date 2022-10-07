//Arrays
let myArray = [1,2,3,4]
let myArray2 = ['a', 'b', 'c', 'd'] //String
let myArray3 = [true, false] //Boolean

let array = [1,'one', false]

let arr = ['what is the meaning of life', 42, true] 

let len = arr.length

console.log("hello")


console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let numbers = [30,40,50];
numbers.push(60,70,80);

numbers.push(90,100);
console.table(numbers);

numbers.splice(0, 2);
console.log(numbers)

let yourName = 'Letherius'
if(confirm('are you ' + yourName + '?')){
    console.log('Hello' + yourName);
} else{
    console.log('What is your name?');
}


let num1 = 1;
let num2 = 2;
if(num1 < num2){
    console.log("num1 is smaller than num2");
} else {
    console.log("num1 is bigger than num2");
};

let n1 = 1;
let n2 = 2;
let n3 = 3;
let notTrue = false;

if (n1<n2 && n3 > n2){
    console.log("n1 is smaller than n2 and n3 is larger than n2");
}
if (n1==1 || n2==1 || n3==1){
    console.log('n1 is 1 or n2 is 1 or n3 is 1')
}
if (!notTrue){
    console.log('not not true is true')
}
