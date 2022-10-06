document.addEventListener('DOMContentLoaded', () => {
})
const API = 'http://localhost:3000/players';
const getAllPlayers = () => {
  fetch(API)
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
  const name = document.createElement('td');
  const team = document.createElement('td');
  const projectedPoints = document.createElement('td');
  const projectedPointsLow = document.createElement('td');
  const projectedPointsHigh = document.createElement('td');
  const buttonHolder = document.createElement('td');
  const button = document.createElement('button');
  // Step 2 of DOM manipulation
  name.textContent = player.firstName;
  lastName.textContent = player.lastName;
  team.textContent = player.team;
  projectedPoints.textContent = player.projectedPoints
  projectedPointsLow.textContent = player.projectedPointsLow
  projectedPointsHigh.textContent = player.projectedPointsHigh
  button.textContent = 'Delete';
  // Step 3 of DOM manipulation
  
  form.addEventListener('submit', e => {
      e.preventDefault();
      
      const player = {
          name: e.target[0].value,
          
      }
      
      console.log(player);
      findPlayer(player)
      
  })
  // buttonHolder.append(button);
  // tr.append(name, team, projectedPoints, projectedPointsLow, projectedPointsHigh, buttonHolder);
  // const tableBody = document.getElementById('table-body');
  // tableBody.append(tr);
  // // Add event listener to edit button
  // button.addEventListener('click', () => tr.remove());
  // // function deleteButton(e){
  // //   e.target.parentNode.remove()
  // //}
};
  // Add event listener to edit button
const addPlayerInfoToForm = player => {
  // Step 1
  const form = document.getElementById('player-form');
  // const children = form.children;
  const nameInput = children[0];
  // const lastNameInput = children[1];
  // const teamInput = children[2];
  // Step 2
  nameInput.value = player.name;
  // lastNameInput.value = player.lastName;
  // teamInput.value = player.team;
};
const init = () => {
  getAllPlayers();
};
init();