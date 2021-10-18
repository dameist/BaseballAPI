<template>
    <div class="home">
        <br>
        <br>
        <br>
        <h1>MAJOR LEAGUE BASEBALL ROSTERS</h1>
        <br>
        <br>
        <team-selector />

    </div>
</template>

<script>
import  teamSelector  from "@/components/TeamSelector.vue";

export default {
    name: "home",
    data() {
        return{
        notHome: false,     
        }
        
    },
    components: { teamSelector},
    
};
</script>

<style scoped>

div.home{
    text-align: center;
    height: 100vh;
    width: 100%;
    background-image: url("https://ewscripps.brightspotcdn.com/dims4/default/6b09919/2147483647/strip/true/crop/1024x576+0+53/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F24%2Fa8%2F22eff94c427e905f7733701ca412%2Fe33de658-35a0-40ad-a926-f98d3dbe08b7.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
h1 {
    color: black;
    font-size: 35px;
}
</style>
