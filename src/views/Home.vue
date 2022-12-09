<template>
  <div class="home-width">
    <div class="home-ads">
      <div class="blog-home-left">
        <div class="captions">
          <p>{{ $t('caption') }}</p>
        </div>
        <div class="big-captions">
          <h1>
            {{ $t('big-caption') }}
          </h1>
          <div class="home-button">
            <button @click="viewTodo">{{ $t('Start-button') }}</button>
          </div>
        </div>
      </div>
      <div class="blog-home-right">
        <img src="@/assets/Mario-bg.jpg" />
      </div>
      <HomeFooter />
    </div>
  </div>
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
.home-width {
  width: 100%;
  height: 800px;
  margin-top: -50px;
}
.home-ads {
  width: 1600px;
  margin: auto;
  height: 640px;
  position: relative;
  top: 60px;
}
.blog-home-left {
  width: 800px;
  height: 740px;
  float: left;
}
.blog-home-right {
  width: 800px;
  height: 740px;
  float: left;

  overflow: hidden;
}
.blog-home-right img {
  height: 811px;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  position: relative;
  left: -600px;
  top: -71px;
  background-blend-mode: color-burn;
}
.captions p {
  width: 600px;
  display: inline-block;
  margin: 80px 0px 0px 0px;
  color: rgb(192, 177, 177);
  letter-spacing: 3px;
  font-size: 22px;
}
.big-captions {
  width: 600px;
  margin: 60px 0px 0px 0px;
}
.big-captions h1 {
  text-align: start;
  font-size: 50px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
  font-weight: 100;
  color: whitesmoke;
}
.home-button button {
  padding: 15px;
  width: 160px;
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
    height: 400px;
    margin-top: -50px;
  }
  .home-ads {
    width: 1400px;
    margin: auto;
    height: 440px;

    position: relative;
    top: 60px;
  }
  .blog-home-left {
    width: 700px;
    height: 527px;
    float: left;
  }
  .blog-home-right {
    width: 700px;
    height: 527px;
    float: left;

    overflow: hidden;
  }
  .blog-home-right img {
    height: 811px;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    position: relative;
    left: -600px;
    top: -180px;
  }
  .captions p {
    width: 600px;
    margin: 40px 0px 0px 0px;
    font-size: 15px;
  }
  .big-captions {
    width: 700px;
    margin: 60px 0px 0px 0px;
  }
  .big-captions h1 {
    text-align: start;
    font-size: 40px;
  }
  .home-button button {
    padding: 10px;
    width: 150px;
  }
}
</style>
