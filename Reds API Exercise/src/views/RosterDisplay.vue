<template>
    <roster-display v-bind:teamID="parseInt($route.params.id)"/>
</template>

<script>
import RosterDisplay from "../components/RosterDisplay.vue";
export default {
    name: "roster-display-view",
    components: {RosterDisplay},
    
};
</script>
<style>
.main {
    display:flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

}
</style>