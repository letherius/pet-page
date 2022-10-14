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

function displaypetTable(){
let petsDiv = document.getElementById("tbody");
let tmp="";
for(let i=0; i<petSalon.pets.length;i++){
let aPet = petSalon.pets[i];
tmp+=`
    <tr id="${aPet.id}" class="table table-bordered">
        <td>Name: ${aPet.name} </td>
        <td>Age: ${aPet.age} </td>
        <td>Gender: ${aPet.gender}</td>
        <td>Breed: ${aPet.breed}</td>
        <td>Service: ${aPet.service}</td>
        </tr>
        <button class="btn btn-danger" onclick="deletePet(${aPet.id});">Delete</button>
    </div>
    `;
}
petsDiv.innerHTML = tmp;
}
