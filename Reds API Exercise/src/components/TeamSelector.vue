<template>
    <div class= "searchform">
        <label for ="team"> </label>
        <select name = "team" class ="selectme" v-model="search" required>
        <option disabled value="">Select MLB Team</option>
        <option v-for="team in allTeams" :value="team.team_id" :key="team.team_id">{{team.name_display_full}}</option>
        
        </select>
        <br>
        <br>
        <div><button class ="search" @click.prevent="submit" type ="button">Click for Roster</button></div>
        
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
            this.$router.push(`/team/${this.search}`)
        }
    }
};
</script>