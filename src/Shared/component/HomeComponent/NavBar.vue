<template>
  <header>
    <div class="header-width">
      <div class="header-title">
        <h3>{{ $t('header-title') }}</h3>
      </div>
      <nav>
        <router-link to="/">{{ $t('Home-nav') }}</router-link>
        <img src="@/assets/Mario-logo2-removebg-preview.png" />
        <router-link to="/about">{{ $t('About-nav') }}</router-link>
      </nav>
      <div class="switch-local">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return { langs: ['en', 'km'] };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&display=swap');
header {
  width: 100%;
  background-color: white;
  padding: 5px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 2px 2px 8px rgba(54, 53, 53, 0.473);
  margin-bottom: 50px;
}
.header-width {
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
.header-title {
  width: 200px;
}
.header-title h3 {
  font-size: 22px;
  font-family: 'Bowlby One SC', cursive;
  letter-spacing: 2px;
  font-weight: 100;
  background: none;
}
img {
  height: 100px;
  margin-right: 50px;
}
nav {
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  left: -75px;
}
nav a {
  margin-right: 50px;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 10px 25px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(133, 129, 129, 0.473), -2px -1px 3px rgba(133, 129, 129, 0.473);
  font-weight: 100;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: all ease 0.4s;
}
nav a.router-link-exact-active {
  background-color: crimson;
  color: white;
}
.switch-local select {
  margin-right: 20px;
  padding: 5px 10px 5px 8px;
  border: 1px solid #999;
  outline: none;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 9px;
  color: #333;
}
@media screen and (max-width: 1600px) {
  .header-width {
    width: 1400px;
  }
}
</style>
