<template>
  <dialog open>
    <div class="error-wraper">
      <slot></slot>
    </div>
  </dialog>
</template>
<script>
export default {
  data() {},
};
</script>

<style scoped>
dialog {
  width: 100%;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.46);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.error-wraper {
  background-color: rgb(255, 255, 255);
  border: solid 2px red;
  width: 610px;
  height: 320px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
</style>
