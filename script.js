document.addEventListener('DOMContentLoaded', () => {

})

const URL = 'http://localhost:3000/players';

const getAllPlayers = () => {
    fetch(URL)
    .then(results => results.json())
    .then(json => renderPlayers(json))
};

const renderPlayers = players => {
    players.forEach(player => {
        createDomPlayer(player);
    });
};

const createDomPlayer = player => {
    // Step 1 of DOM manipulation
    const tr = document.createElement('tr');
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const team = document.createElement('td');
    const rushingYards = document.createElement('td');
    const receivingYards = document.createElement('td');
    const touchdowns = document.createElement('td');
    const buttonHolder = document.createElement('td');
    const button = document.createElement('button');
  
    

    // Step 2 of DOM manipulation
    firstName.textContent = player.firstName;
    lastName.textContent = player.lastName;
    team.textContent = player.team;
    rushingYards.textContent = player.rushingYards
    receivingYards.textContent = player.receivingYards
    touchdowns.textContent = player.touchdowns

    button.textContent = 'Delete';


    // Step 3 of DOM manipulation
    buttonHolder.append(button);
    tr.append(firstName, lastName, team, rushingYards, receivingYards, touchdowns, buttonHolder);

    const tableBody = document.getElementById('table-body');

    tableBody.append(tr);

    // Add event listener to edit button
    button.addEventListener('click', () => tr.remove());

   // function deleteButton(e){
   //     e.target.parentNode.remove()
   //}

};

    // Add event listener to edit button


// const addPlayerInfoToForm = player => {
//     // Step 1
//     const form = document.getElementById('player-form');

//     const children = form.children;

//     const firstNameInput = children[0];
//     const lastNameInput = children[1];
//     const teamInput = children[2];

//     // Step 2
//     firstNameInput.value = player.firstName;
//     lastNameInput.value = player.lastName;
//     teamInput.value = player.team;
// };



const init = () => {
    getAllPlayers();
};

init();
