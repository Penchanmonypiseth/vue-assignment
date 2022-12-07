<template>
  <div class="Card">
    <div class="my-card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Card {
  color: whitesmoke;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.my-card {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.255);
  height: 700px;
  text-align: center;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid rgb(207, 87, 87) 4px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.096), rgba(0, 0, 0, 0.155) -1px -1px 5px;
  position: relative;
}
.my-card:before {
  content: ' ';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid whitesmoke;
  margin-right: 10px;
  border-top: rgb(196, 8, 46) solid;
  animation: loading 0.75s ease infinite;
}
@keyframes loading {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}

@media screen and (max-width: 1600px) {
  .my-card {
    width: 95%;
    height: 480px;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
