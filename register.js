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

//CONSTRUCTOR
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


let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let selectService=document.getElementById("selService");

function register(){
let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, selectService.value);
petSalon.pets.push(thePet);
}
displayPetCards();
displayNumberOfPets(); 
clearInputs();


function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    selectService.value="";
}
function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML=`We have ${petSalon.pets.length} pets in the system.`;
}
function init(){
    let Scooby = new Pet("Scooby", 59, "Male", "Dane", "Grooming","Shaggy",
    "777-777-777");
    let Scrappy = new Pet("Scrappy", 20, "Male", "Dane", "Grooming","Shaggy",
    "777-777-777");
    petSalon.pets.push(Scooby,Scrappy);
    displayNumberOfPets();
    displayPetCards(); 
    displayPetsTable();
}

window.onload = init;
