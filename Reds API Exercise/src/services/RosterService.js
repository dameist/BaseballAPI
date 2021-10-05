import axios from 'axios';

export default {
    reds() {
        return axios.get('/json/named.roster_40.bam?team_id=121');
    },
    allTeams() {
        return axios.get(`/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season=2021`);
    },
    get(rosterID) {
        return axios.get(`/json/named.roster_40.bam?team_id=${rosterID}`);
    }

}