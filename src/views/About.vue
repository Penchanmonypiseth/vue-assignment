<template>
  <div class="about-width">
    <div class="about-ads">
      <div class="about">
        <h1>{{ $t('about-mario-todo') }}</h1>
        {{ $t('About-mario-content') }}
      </div>
    </div>
    <div class="footer-ads">
      <HomeFooter />
    </div>
  </div>
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
.about-width {
  width: 1600px;
  height: 640px;
  margin: auto;
}
.about-ads {
  width: 1600px;
  margin: auto;
  height: 640px;
  position: relative;
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about {
  width: 600px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: solid red 4px;
  border-radius: 20px;
  animation: aboutAnimate 2s ease infinite alternate;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 0px;
  line-height: 30px;
  font-weight: 100;
  position: relative;
  top: -80px;
}
.footer-ads {
  position: relative;
  top: 10px;
}
@keyframes aboutAnimate {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(30px);
  }
}
@media screen and (max-width: 1600px) {
  .about-width {
    width: 1400px;
    height: 440px;
    margin: auto;
  }
  .about-ads {
    width: 1400px;
    margin: auto;
    height: 440px;
    position: relative;
    top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about {
    width: 800px;
    height: 300px;
  }
}
</style>
