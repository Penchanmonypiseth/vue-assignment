<template>
  <NavBar />
</template>

<script>
import NavBar from '@/Shared/component/HomeComponent/NavBar.vue';
export default {
  components: { NavBar,},
  data() {
    return {};
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
}
body {
  margin: 0;
  padding: 0;
}
</style>
