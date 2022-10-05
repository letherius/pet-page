//object literal {}
let petSalon = {
//atributes
    name:"The Fashion Pet",
    phone:"777-777-7777",
    address:{
        country:"Mex",
        city:"Tijuana",
        street: "Universidad",
        number:"263-k",
        zip:"22141"
    },
    pets:[]//instead of students use pets
}

let students = [
    {
        name:"Myles",
        age:98,
        grade:"A"
},
{
    name:"Tuong",
    age:98,
    grade:"A-"
},
{
    name:"Miguel",
    age:97,
    grade:"F"
}
];
//FOR LOOP: start point; stopping condition; increment
//length return the number of elements in the array
for(let i=0; i<students.length; i++) {
console.log(students[i].name);
}
console.log("We have " + students.length + " students");//--use alert instead of console


//brute force solution
//console.log(students[0]);
////console.log(students[1]);
//console.log(students[2]);
//console.log(students[3]);
