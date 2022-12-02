<template>
  <div class="switch-wraper">
    <div class="switch-view">
      <view-list></view-list>
    </div>
  </div>
  <transition name="rule-test-animate">
    <RuleTest v-if="isShowRule"></RuleTest>
  </transition>
</template>

<script>
import ViewList from './ViewList.vue';
import RuleTest from '../MyRuleTestToast/RuleTest';
export default {
  components: { ViewList, RuleTest },
  data() {
    return {
      isShowRule: false,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.isShowRule = true;
    }, 1500);
  },
};
</script>

<style scoped>
.switch-wraper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.switch-view {
  margin: auto;
}
.switch-view button {
  margin: 30px auto;
  margin-right: 50px;
  text-decoration: none;
  color: black;
  border: 2px solid white;
  background-color: rgb(198, 24, 24);
  padding: 10px 25px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.348), -1px -1px 3px rgba(0, 0, 0, 0.348);
  font-weight: 100;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: all ease 0.4s;
}
.switch-view button:hover {
  background-color: rgba(214, 81, 112, 0.76);
}
.switch-view button:focus {
  border: solid 2px orange;
}

/*===>Vue Transition<=== */
.rule-test-animate-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.rule-test-animate-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.rule-test-animate-enter-active {
  transition: all 0.5s ease-in;
}
.rule-test-animate-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.rule-test-animate-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.rule-test-animate-leave-active {
  transition: all 0.5s ease-out;
}

@media screen and (max-width: 1600px) {
  .switch-wraper {
    margin-top: -25px;
  }
}
</style>
