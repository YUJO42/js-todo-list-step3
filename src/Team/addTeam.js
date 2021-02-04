import { API } from '../api/API.js';
import message from '../utils/message.js';
import { getTeams } from './getTeams.js';

export const addTeam = async () => {
  const inputTeamName = prompt(message.ENTER_TEAM_NAME);
  const teamName = inputTeamName.trim();

  if (teamName.length) {
    await API.addTeam(inputTeamName);
  }

  getTeams();
};
