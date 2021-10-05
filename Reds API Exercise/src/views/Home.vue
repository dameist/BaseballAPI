<template>
    <div class="home">
        <h1>MLB TEAM SEARCH SITE</h1>
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
    width: 100%
}
h1 {
    color: black;
}
</style>
