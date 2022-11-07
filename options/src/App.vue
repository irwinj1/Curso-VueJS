<template>
  <div>
    <div>
      {{ text }}
    </div>
    <div>
      {{algo}}
    </div>
    <button @click="show = !show">Menu</button>
    <transition name="fade">
      <Menu v-show="show" />
    </transition>

    <Modal />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Modal from "./components/Modal.vue";
import base from "@/mixins/base";
export default {
  name: "App",
  mixins: [base],
  components: {
    Menu,
    Modal,
  },
  data: () => ({
    show: true,
    text: "Hola Vue",
  }),
  beforeCreate() {
    console.log("beforeCreate", this.text, this.$el);
  },
  created() {
    console.log("created", this.text, this.$el);
  },
  mounted() {
    console.log("mounted", this.text, this.$el);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>
