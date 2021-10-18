<template>
    <div class= "searchform">
        <label for ="team"> </label>
        <select name = "team" class ="selectme" v-model="search" required>
        <option disabled value="">Select MLB Team</option>
        <option v-for="team in allTeams" :value="team.team_id" :key="team.team_id">{{team.name_display_full}}</option>
        
        </select>
        <br>
        <br>
        <br>
        <a href="#" class="cta">
  <span @click.prevent="submit">Select Roster</span>
  <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</a>
    </div>
</template>

<script>
import rosterService from "@/services/RosterService.js";
export default {
    name: "team-selector",
    components: {},
    data() {
        return{
            allTeams: [],
            allData: [],
            reds: [],
            search: "",
        }
    },
    created() {
        // rosterService.reds()
        // .then((redsData) => {
        //     this.reds = redsData.data;
        // })
        rosterService.allTeams()
        .then((teamsData) => {
            this.allData = teamsData.data;
            this.allTeams = this.allData.team_all_season.queryResults.row;
        })
        .catch((err) => {
        console.error(err + " missing tournament data.");
      });
    },
    computed: {

    },
    methods: {
        submit(){
            if(this.search != ""){
                this.$router.push(`/team/${this.search}`)
            }
            
        }
    }
};
</script>
<style >
select{
    font-size:22px;
    font-family: sans-serif;
}
</style>