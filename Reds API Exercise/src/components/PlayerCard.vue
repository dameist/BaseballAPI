<template>
    <div class="card">
        <div id="name">
            <h1 class="player-name">{{player.name_display_first_last}}</h1>
        </div>
        <div id="team">
            <h3 class="team">{{player.team_name}}</h3>
        </div>
        <div id="position_dominance">
            <h3 class="deets">Position:  {{player.position_txt}}</h3>
            <h3 class="throws"> Throws: {{player.throws}} Bats: {{player.bats}}</h3>
            <h3 class="bats">Height: {{player.height_feet}}'{{player.height_inches}}" Weight: {{player.weight}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "player-card",
    props: {
        player: Object,
    },
}
</script>

<style>
    h1 {
        text-align: center;
        color: black;
        line-height: 200%;
        font-size: 140%;
        font-family: sans-serif;
    }
    h3 {
        margin-left: 5px;
        color: black;
        font-size: 100%;
        line-height: 200%;
        font-family: sans-serif;
    }
    .card {
        background-color: grey;
        border: 2px solid black;
        border-radius: 10px;
        width: 250px;
        height: 200px;
        margin: 20px;
    }
</style>