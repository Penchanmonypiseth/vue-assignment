<template>
  <div class="footer-width">
    <div class="footer-ads">
      <div class="footer-links">
        <router-link to="/loading">{{ $t('footer-fqa') }}</router-link>
        <router-link to="/loading">{{ $t('footer-preview') }}</router-link>
        <router-link to="/loading">{{ $t('footer-contact') }}</router-link>
        <router-link to="/loading">{{ $t('footer-download') }}</router-link>
      </div>
      <div class="footer-social-media-icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-google"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-app-store"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-width {
  width: 100%;
}
.footer-ads {
  width: 1600px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -50px;
}
.footer-links {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 800px;
}
.footer-links a {
  margin-right: 80px;
  position: relative;
  left: -40px;
  text-decoration: none;
  color: white;
}
.footer-links a:hover {
  color: rgb(251, 7, 56);
  transition: all ease 0.5s;
}
.footer-social-media-icons {
  display: inline-flex;
}
.footer-social-media-icons i {
  margin-right: 30px;
  font-size: 20px;
  color: white;
}
.footer-social-media-icons :hover {
  color: rgb(251, 7, 56);
  transition: all ease 0.5s;
}
@media screen and (max-width: 1600px) {
  .footer-ads {
    width: 1400px;
  }
}
</style>
