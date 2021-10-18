<template>
<div class = "whole">
    <div class="header">
         <div class="nav">
            <router-link v-bind:to="{ name: 'home' }"><button>Home</button></router-link>
            </div>
    </div>
    <br>
    <div class="searchbar">
    <input class="form-control" type="text" placeholder="Enter Player Name to Search" v-model="filter.playerName"/>
    </div>
    <div class="main">
        <player-card class ="maincard"
        v-bind:player="player"
        v-for="player in filteredList"
        :key="player.playerID">
        </player-card>
    </div>
    </div>
</template>

<script>
import rosterService from "../services/RosterService";
import playerCard from "@/components/PlayerCard.vue";
export default {
 components:{playerCard},
 name: "roster-display",
 props: {
     "rosterID": Number,
 } ,
 data() {
     return{
         allData: [],
         rosterData: [],
         notHome: true,
         filter: {
             playerName: "",
         }
     }
 }  ,
 created(){
     rosterService.get(this.$route.params.id).then((queryData) => {
         this.allData = queryData.data;
         this.rosterData = this.allData.roster_40.queryResults.row;
         this.$store.commit("SET_ACTIVE_TEAM", this.rosterData.data);
     })
 },
 computed: {
     filteredList() {
         let filteredPlayers = this.rosterData;
         if (this.filter.playerName != "") {
             filteredPlayers = filteredPlayers.filter((player) =>
             player.name_display_first_last.toLowerCase()
             .includes(this.filter.playerName.toLowerCase())
             );
         }
         return filteredPlayers;
     }
 }
}
</script>
<style scoped>
.header {
    width: 100vw;
}
button {
    margin-left: 92%;
}
.searchbar {
    width: 100%;
}
input {
    text-align: center;
    width: 25%;
    margin-left: 37.5%;
    margin-right: 37.5%;
    align-content: center;
    border-radius: 5px;
}
</style>