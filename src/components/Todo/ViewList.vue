<template>
  <div class="view-wrapper">
    <div class="view-list">
      <SetList @addContacts="getDataFromServer"></SetList>
      <transition-group tag="ul" name="userAnimate">
        <MyStoreList
          v-for="myUser in users"
          :key="myUser.id"
          :id="myUser.id"
          :myName="myUser.name"
          @delete="deleteList"
        >
        </MyStoreList>
      </transition-group>
    </div>
  </div>
</template>

<script>
import MyStoreList from './MyStoreList.vue';
import SetList from '../Todo/SetList.vue';

export default {
  components: { MyStoreList, SetList },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getDataFromServer() {
      const res = await fetch(process.env.VUE_APP_TEST);
      console.log(res);
      const data = await res.json();
      this.users = data;
    },

    deleteList(index) {
      // DELETE FROM List items from json server
      fetch('http://localhost:3000/users/' + index, {
        method: 'DELETE',
      });
      // DELETE FROM STATIC List items
      this.users = this.users.filter((usr) => usr.id !== index);
    },
  },
  mounted() {
    this.getDataFromServer();
  },
};
</script>

<style scoped>
.view-wrapper {
  width: 600px;
  height: 700px;
}
button {
  position: relative;
  top: -574px;
  right: 46px;
  float: right;
  padding: 8px 20px;
  margin-left: 10px;
  background-color: rgb(255, 0, 51);
  border: solid 2px white;
  box-shadow: 1px 1px 5px rgba(34, 32, 32, 0.607), -1px -1px 5px rgba(66, 63, 63, 0.508);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold';
  border-radius: 20px;
}
button:focus {
  border: solid 2px orange;
  transition: all ease 0.3s;
}

.userAnimate-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}
.userAnimate-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.userAnimate-enter-active {
  transition: all 0.5s ease-in;
}
.userAnimate-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.userAnimate-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.userAnimate-leave-active {
  transition: all 0.5s ease-in;
}
@media screen and (max-width: 1600px) {
  .view-wrapper {
    height: 240px;
  }
}
</style>
