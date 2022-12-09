<template>
  <div class="setlist-view">
    <div class="input-field">
      <form action="" @submit.prevent>
        <div class="mario-title">
          <img src="@/assets/mario-title.svg" />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Set your Plan / Date Here.."
          v-model="enterText"
          v-focus
        />
        <button type="submit" @click="submitData">{{$t('Submit Data')}}</button>
      </form>
    </div>
  </div>
  <transition name="invalid-animate">
    <MessageErrorInput v-if="isInputValid">
      <div class="header-error">
        <header>{{$t('invalid-title')}}</header>
      </div>
      <div class="content-error-message">
        <span>
          <p>
           {{$t('invalid-message')}}
          </p>
          <button @click="comfrimInvalid">Okay</button>
        </span>
      </div>
    </MessageErrorInput>
  </transition>
</template>

<script>
import MessageErrorInput from '@/Shared/component/AlertMsg/MessageErrorInput.vue';
import { focus } from '@/Shared/directive/vFocus';

export default {
  components: {
    MessageErrorInput,
  },
  directives: {
    focus,
  },
  data() {
    return {
      enterText: '',
      isInputValid: false,
    };
  },
  methods: {
    submitData() {
      if (this.enterText === '') {
        this.isInputValid = true;
      } else {
        fetch(process.env.VUE_APP_TEST, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.enterText,
          }),
        });
        this.$emit('addContacts', this.enterText);
      }
      this.enterText = '';
    },
    comfrimInvalid() {
      this.isInputValid = false;
    },
  },
};
</script>

<style scoped>
.setlist-view {
  width: 635px;
  background-color: rgba(255, 255, 255, 0.219);
  height: 220px;
  backdrop-filter: blur(1px);
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.content-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
.input-field {
  width: 550px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 37px;
}
.input-field h1 {
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
  box-shadow: 1px 1px 5px rgba(66, 63, 63, 0.508), -1px -1px 5px rgba(66, 63, 63, 0.508);
  background-color: rgb(255, 0, 51);
  position: relative;
  top: -30px;
}
.input-field input {
  padding: 10px;
  outline: none;
  border: 2px solid whitesmoke;
  background-color: crimson;
  color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(34, 32, 32, 0.386), -1px -1px 5px rgba(66, 63, 63, 0.508);
  transition: all ease 0.3s;
  margin-right: 10px;
  width: 300px;
}
.input-field input::placeholder {
  color: white;
  font-size: 12px;
}
.input-field input:focus {
  background-color: rgba(1, 0, 0, 0.245);
  transition: all ease 0.3s;
  border: 2px solid orange;
}
.input-field button {
  padding: 8px 20px;
  margin-left: 10px;
  background-color: rgb(255, 0, 51);
  border: solid 2px white;
  box-shadow: 1px 1px 5px rgba(34, 32, 32, 0.607), -1px -1px 5px rgba(66, 63, 63, 0.508);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold';
  border-radius: 20px;
}
.input-field button:focus {
  border: solid 2px orange;
  transition: all ease 0.3s;
}
.mario-title img {
  height: 60px;
  margin: 20px auto;
  display: block;
  position: relative;
  top: -10px;
}
.header-error {
  background-color: crimson;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-error header {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
}
.content-error-message {
  text-align: justify;
  padding: 10px;
  margin-top: -10px;
}
.content-error-message p {
  font-family: 'Bebas Neue', cursive;
}
.content-error-message button {
  float: right;
  padding: 10px 40px;
  margin-right: 10px;
  border: 2px solid crimson;
  outline: none;
  background-color: crimson;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold';
  border-radius: 5px;
  font-size: 15px;
  transition: all ease 0.3s;
}

.content-error-message button:focus {
  border: 2px solid rgb(237, 132, 12);
  transition: all ease 0.3s;
}
.content-error-message button:hover {
  background-color: rgba(220, 20, 60, 0.886);
  transition: all ease 0.3s;
}

/*<!-- Transition animate -->*/
.invalid-animate-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.invalid-animate-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.invalid-animate-enter-active {
  transition: all 0.5s ease-in;
}
.invalid-animate-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.invalid-animate-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.invalid-animate-leave-active {
  transition: all 0.5s ease-out;
}
</style>
