let petSalon ={

    name: "The Fashion Pet",
    phone:"777-777-777",
    address:{
        country:"Mex",
        city:"Tijuana",
        street:"University",
        number:"263-k",
        zip:"22141"
    },
    pets:[]
}
//----------these are the arguements (local vars)------>
function Pet(name, age, gender, breed, service, owner, phone){
    //the real attributes are the next:
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
}
let scooby = new Pet("Scooby", 59, "Male", "Dane", "Grooming","Shaggy",
"777-777-777");
let Theri = new Pet("Theri", 20, "Male", "Dane", "Grooming","Shaggy",
"777-777-777");

petSalon.pets.push(scooby,Theri);

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");

function register(){
    console.log(inputName.value, inputAge.value, inputGender.value);
}
let thePet = new Pet(inputName.value, inputAge.value, inputGender.value);

console.log(thePet);
petSalon.pets.push(thePet);


function displayPetNames(){
    for(i=0;i<petSalon.pets.length;i++){
        console.log(petSalon.pets[i].name);
    }
    alert(`The pet salon has ${petSalon.pets.length} registered.`)
}
