<template>
  <div class="home-width">
    <div class="home-ads">
      <div class="captions">
        <p>MARIO TODO IS A PERFECT TOOL FOR YOUR DALIY LIFE.</p>
      </div>
      <div class="big-captions">
        <h1>Mario Todo is Create a Beautiful List Note EveryDay In A Minutes Check It Now!!.</h1>
        <div class="home-button">
          <button @click="viewTodo">Start Now</button>
        </div>
      </div>
    </div>
  </div>
  <HomeFooter />
</template>

<script>
import HomeFooter from '@/Shared/component/HomeComponent/HomeFooter.vue';
export default {
  name: 'HomeView',
  components: { HomeFooter },
  data() {
    return {};
  },
  methods: {
    viewTodo() {
      this.$router.push('/todo');
    },
  },
};
</script>

<style>
body {
  background-image: url('@/assets/Mario-bg.jpg');
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 75%;
  background-position-y: 70px;
}
.home-width {
  width: 100%;
  margin-top: 130px;
}
.home-ads {
  width: 1200px;
  margin: auto;
  height: 400px;
}
.captions p {
  width: 600px;
  display: inline-block;
  
  color: rgb(192, 177, 177);
  letter-spacing: 3px;
  font-size: 22px;
}
.big-captions {
  width: 600px;
  margin: 30px 0px 0px 0px;
}
.big-captions h1 {
  text-align: start;
  font-size: 60px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
  font-weight: 100;
  color: whitesmoke;
}
.home-button button {
  padding: 15px;
  width: 150px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
  font-weight: 100;
  outline: none;
  background: none;
  color: whitesmoke;
  border: 3px solid white;
  transition: all ease 0.5s;
}
.home-button button:hover {
  background-color: rgb(185, 20, 53);
  transition: all ease 0.5s;
  transform: translateX(20px);
  border: solid orange 3px;
}
@media screen and (max-width: 1600px) {
  .home-width {
    margin-top: 100px;
  }
  .home-ads {
    height: 230px;
  }
  .captions p {
    font-size: 18px;
  }
  .big-captions h1 {
    font-size: 45px;
  }
  .home-button button {
    width: 130px;
    padding: 10px;
  }
  body {
    background-image: url('@/assets/Mario-bg.jpg');
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 75%;
    background-position-y: -10px;
  }
}
</style>
