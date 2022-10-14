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
let count=0;
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
    this.id=count++;
}


let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let selectService=document.getElementById("selService");

function isValid(newPet){
    let valid=true;
    if(newPet.service==""){
        valid=false;
    }
    return valid;
}

function register(){
let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, selectService.value);

if(isValid(thePet)==true){
petSalon.pets.push(thePet);
clearInputs();
displayNumberOfPets(); 
displaypetTable()
}else{
    alert("Enter a service");
  }
}


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

function deletePet(petID){
    let deleteIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let aPet = petSalon.pets[i];
        if(aPet.id==petID){
            deleteIndex=i;
            console.log("The deleted pet is in the position" + deleteIndex);
        }
    }
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(petID).remove();
    displayNumberOfPets();
}
function init(){
    let Scooby = new Pet("Scooby", 59, "Male", "Dane", "Grooming","Shaggy",
    "777-777-777");
    let Scrappy = new Pet("Scrappy", 20, "Male", "Dane", "Grooming","Shaggy",
    "777-777-777");
    petSalon.pets.push(Scooby,Scrappy);
    displayNumberOfPets();
    displaypetTable()
     
    
}

window.onload = init;
