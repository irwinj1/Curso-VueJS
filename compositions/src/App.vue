<template>
  <div>
    <Home saludo1="Hola" saludo2="Vue"/>
  </div>
</template>

<script setup>
import { ref,onMounted,provide } from 'vue';
import Home from './components/Home.vue'
const nombre = ref('Irwin')
provide('nombre',nombre.value)
onMounted(()=>{
  console.log('Prueba ');
})
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
</style>
