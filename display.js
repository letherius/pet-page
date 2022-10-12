function displayPetCards(){
let petsDiv = document.getElementById("pets");
let tmp="";
for(let i=0; i<petSalon.pets.length;i++){
let aPet = petSalon.pets[i];
tmp+=`
    <div id="${aPet.id}" class="pet">
        <p>Name: ${aPet.name} </p>
        <p>Age: ${aPet.age} </p>
        <p>Gender: ${aPet.gender}</p>
        <p>Breed: ${aPet.breed}</p>
        <p>Service: ${aPet.service}</p>
        <button class="btn btn-danger" onclick="deletePet(${aPet.id});">Delete</button>
    </div>
    `;
}
petsDiv.innerHTML = tmp;
}

function displayPetTable(){

}
