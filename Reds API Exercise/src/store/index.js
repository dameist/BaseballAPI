import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      activeRoster: {
        row: [
            {
                position_txt: "",
                weight: null,
                name_display_first_last: "",
                college: "",
                height_inches: null,
                starter_sw: "",
                jersey_number: null,
                end_date: null,
                name_first: "",
                bats: "",
                team_code: "",
                height_feet: null,
                pro_debut_date: null,
                status_code: "",
                primary_position: null,
                birth_date: null,
                team_abbrev: "",
                throws: "",
                team_name: "",
                name_display_last_first: "",
                name_use: "",
                player_id: null,
                name_last: "",
                team_id: null,
                start_date: null,
                name_full: ""
            },
        ]
      }
    },
    mutations: {
      SET_ACTIVE_TEAM(state, data) {
        state.activeRoster = data;
      }
    }
  })