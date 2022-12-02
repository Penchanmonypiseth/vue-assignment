<template>
  <div class="my-rule-wrapper" v-if="isRuleContent">
    <div class="my-rule">
      <div class="header-rule"><h1>My Rule To Test</h1></div>
      <div class="rule">
        <span>
          <p class="important-rule">
            1. It Is Important Thing I want you go to terminal and run npx json-server --watch data/db.json first.
          </p>
          <p>2.If You Input Empty Value You'll See Alert Message</p>
          <p>3.Data that Users Input Doesn't Lose When You Refresh or Close website.</p>
          <p>4.You Can Delete List And It Will Be Remove from Json And UserInterface.</p>
          <p>5.You Can HightLight Lists When You Think You Complete it.</p>
        </span>
        <h2 class="rule-footer">ENJOY TEST</h2>
      </div>
      <button @click="hideRuleContent">Comfirm</button>
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
.rule p {
  text-align: start;
  margin-left: 30px;
  font-weight: bold;
  margin-right: 20px;
}
.important-rule {
  color: crimson;
}
.rule-footer {
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
}
@media screen and (max-width: 1600px) {
  .my-rule-wrapper {
    top: -350px;
    width: 350px;
    height: 350px;
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
    margin-left: 35px;
  }
  .rule {
    color: black;
    top: 80px;
  }
  .rule p {
   font-size: 12.50px;
  }
}
</style>
