function displayPetCards(){
let petsDiv = document.getElementById("pets");
let tmp="";
for(let i=0; i<petSalon.pets.length;i++){
let aPet = petSalon.pets[i];
tmp+=`
    <tr id="${aPet.id}" class="pet">
        <td>Name: ${aPet.name} </td>
        <td>Age: ${aPet.age} </td>
        <td>Gender: ${aPet.gender}</td>
        <td>Breed: ${aPet.breed}</td>
        <td>Service: ${aPet.service}</td>
        <td>Owner: ${aPet.owner}</td>
        <td>Phone: ${aPet.phone}</td>
        </tr>
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
        <td>Owner: ${aPet.owner}</td>
        <td>Phone: ${aPet.phone}</td>
        </tr>
        <button class="btn btn-danger" onclick="deletePet(${aPet.id});">Delete</button>
    </div>
    `;
}
petsDiv.innerHTML = tmp;
}
