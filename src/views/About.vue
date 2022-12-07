<template>
  <div class="about">
    <section>
      <h1>About Mario Todo</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure, nemo, nobis numquam eaque ducimus natus
      aspernatur ut aperiam, totam laudantium est ratione atque tenetur doloremque! Ab saepe deserunt dicta. Veritatis
      at voluptatibus aut obcaecati reiciendis provident reprehenderit, tenetur veniam quisquam a unde ipsa facere quos
      illum, rerum eum id officiis consectetur, soluta sunt. Ea sunt voluptates dolore suscipit culpa quasi voluptatibus
      quod excepturi esse nesciunt unde tenetur id maiores tempore ab iure soluta libero, voluptate expedita modi eos
      odit. Voluptas quos quibusdam earum rem voluptates dolore aut. Incidunt a suscipit amet aliquid, iure adipisci
      ullam animi voluptatum corrupti.
    </section>
  </div>
  <HomeFooter />
</template>
<script>
import HomeFooter from '@/Shared/component/HomeComponent/HomeFooter.vue';

export default {
  components: { HomeFooter },
  data() {
    return {};
  },
};
</script>

<style scoped>
.about {
  height: 480px;
  width: 600px;
  margin: auto;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  font-weight: 100;
}
section {
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: solid red 4px;
  border-radius: 20px;
  animation: aboutAnimate 5s ease infinite;
}
@keyframes aboutAnimate {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(50px);
  }
}
@media screen and (max-width: 1600px) {
  .about {
    height: 230px;
    margin-top: 100px;
  }
}
</style>
