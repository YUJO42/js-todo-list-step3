import { addTeam } from './addTeam.js';
import { getTeams } from './getTeams.js';

const onClickTeamList = ({ target }) => {
  const targets = {
    'add-team-button': addTeam,
  };

  return targets[target.id]();
};

export const init = () => {
  getTeams();
  const $teamListContainer = document.querySelector('.team-list-container');

  $teamListContainer.addEventListener('click', onClickTeamList);
};
