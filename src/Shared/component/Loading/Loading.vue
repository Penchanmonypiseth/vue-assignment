<template>
  <Card>
    Loading to develop..
    <button @click="backHomeBtn">Back to home page</button>
  </Card>
</template>

<script>
import Card from '../CardSlot/Card.vue';
export default {
  components: { Card },
  data() {
    return {};
  },
  methods: {
    backHomeBtn() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  position: absolute;
  margin-left: 10px;
  background-color: rgb(255, 0, 51);
  border: solid 2px white;
  box-shadow: 1px 1px 5px rgba(34, 32, 32, 0.607), -1px -1px 5px rgba(66, 63, 63, 0.508);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold';
  border-radius: 20px;
  font-size: 15px;
  top: 20px;
  right: 20px;
  transition: all 0.3s ease;
}
button:hover {
  background-color: rgba(250, 20, 66, 0.827);
  border: solid orange 2px;
  transition: all 0.3s ease;
}

</style>
