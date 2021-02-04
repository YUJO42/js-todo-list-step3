import { API } from '../api/api.js';

const addTeamCardTemplate = () => {
  return `<div class="add-team-button-container">
            <button id="add-team-button" class="ripple">
              <span class="material-icons">add</span>
            </button>
          </div>`;
};

const teamCardTemplate = (team) => {
  return `<div class="team-card-container" data-id=${team._id}>
            <a href="./kanban.html" class="card">
              <div class="card-title">${team.name}</div>
            </a>
          </div>`;
};

export const getTeams = async () => {
  const $teamListContainer = document.querySelector('.team-list-container');
  const teams = await API.getTeams();

  $teamListContainer.innerHTML =
    teams.map((team) => teamCardTemplate(team)).join('\n') +
    addTeamCardTemplate();
};
