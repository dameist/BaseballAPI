<template>
    <div class ="main">
            <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return{
            notHome: false,
        }
    }
}
</script>

<style>
button {
  font-family: "Comic Sans";
  font-size: 25px;
  background-color: #8f8f8f;
  border-radius: 10px;
  margin-left:5px;
  margin-right:5px;
}
</style>