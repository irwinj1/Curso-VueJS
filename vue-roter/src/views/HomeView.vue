<script >
export default {
  data: () => ({
    username: "",
  }),
  methods: {
    iniciar() {
      // this.$router.push({
      //   path: "/chats",
      //   query: { variable1: 1 },
      // },);
      this.$router.go(-1)
    },
  },
};
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input v-model="username" placeholder="username" />
    <button @click="iniciar">Iniciar Sesion</button>
  </main>
</template>
