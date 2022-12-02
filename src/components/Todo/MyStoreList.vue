<template>
  <section>
    <ul>
      <li :class="changeStyle">
        {{ myName }}
      </li>
      <div class="list-button">
        <button @click="deleteData">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button @click="lineThrough">
          <i class="fas fa-highlighter"></i>
        </button>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    myName: {
      type: String,
      required: true,
    },
  },
  props: ['myName', 'id'],
  data() {
    return {
      isLineText: false,
    };
  },
  methods: {
    lineThrough() {
      this.isLineText = !this.isLineText;
    },
    deleteData() {
      this.$emit('delete', this.id);
    },
  },
  computed: {
    changeStyle() {
      return {
        active: this.isLineText,
      };
    },
  },
};
</script>

<style scoped>
ul {
  text-decoration: none;
  list-style-type: none;
  width: 93%;
  background-color: rgb(255, 255, 255);
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
li {
  font-family: 'Bebas Neue', cursive;
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}
.list-button button {
  margin: 0 5px 0px 0px;
  text-decoration: none;
  color: black;
  border: 2px solid white;
  background-color: rgb(211, 77, 77);
  padding: 10px 25px;
  border-radius: 60px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  font-weight: 100;
  transition: all ease 0.4s;
  cursor: pointer;
}
.list-button i {
  font-size: 20px;
}
.active {
  text-decoration: line-through 2px solid yellow;
}
</style>
