<template>
  <div class="my-rule-wrapper" v-if="isRuleContent">
    <div class="my-rule">
      <div class="header-rule">
        <h1>{{ $t('header-rule') }}</h1>
      </div>
      <div class="rule">
        <span>
          <p class="important-rule">
            {{ $t('important-rule') }}
          </p>
          <p class="rule-lists">
            {{ $t('rule-test') }}
          </p>
        </span>
        <h2 class="rule-footer">{{$t('rule-footer')}}</h2>
      </div>
      <button @click="hideRuleContent">{{$t('Comfirm')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRuleContent: true,
    };
  },
  methods: {
    hideRuleContent() {
      this.isRuleContent = false;
    },
  },
};
</script>

<style scoped>
.my-rule-wrapper {
  width: 450px;
  height: 450px;
  background-color: whitesmoke;
  display: flex;
  position: relative;
  top: -840px;
  left: 72%;
  border: 3px solid rgb(233, 87, 50);
  border-radius: 20px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
.my-rule button {
  text-decoration: none;
  color: black;
  border: 3px solid red;
  background-color: crimson;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.348), -1px -1px 1px rgba(0, 0, 0, 0.348);
  font-weight: 100;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: all ease 0.4s;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 15px;
  overflow: hidden;
}
.header-rule {
  background-color: crimson;
  width: 450px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 150px;
  border-top-right-radius: 30px;
}
.header-rule h1 {
  text-align: start;
  margin-left: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
}
.rule {
  position: absolute;
  color: black;
  top: 100px;
  left: 0;
}
.rule,
.rule-lists p {
  text-align: start;
  margin-left: 30px;
  font-weight: bold;
  margin-right: 20px;
  line-height: 30px;
}
.important-rule {
  color: crimson;
}
.rule-footer {
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 1px;
  font-size: 18px;
}
@media screen and (max-width: 1600px) {
  .my-rule-wrapper {
    top: -650px;
    width: 350px;
    height: 400px;
    left: 75%;
  }
  .my-rule button {
    padding: 10px 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.348), -1px -1px 1px rgba(0, 0, 0, 0.348);
  }
  .header-rule {
    background-color: crimson;
    width: 355px;
    top: -1px;
    left: -1px;
  }
  .header-rule h1 {
    top: 11px;
    position: relative;
    margin-left: 35px;
    font-size: 24px;
  }
  .rule {
    color: black;
    top: 80px;
  }
  .rule p {
    font-size: 12.5px;
  }
  .rule-lists {
   line-height: 17px;
  }
}
</style>
