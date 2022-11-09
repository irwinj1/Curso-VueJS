<template>

 <Suspense>
  <template #default>
    <home />
  </template>
  <template #fallback>
    <splash-screen></splash-screen>
  </template>
 </Suspense>
</template>

<script>
import SplashCreen from '@/components/SplashScreen.vue'
import { defineAsyncComponent } from 'vue';
import SplashScreen from './components/SplashScreen.vue';
export default {
  name: 'App',
  components: {
    SplashScreen,
    home: defineAsyncComponent(()=>new Promise((resolve)=>{
      setTimeout(() => {
        resolve(import('./components/Home.vue'))
      }, 2500);
    }))
    
  }
}
</script>

<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  --brand-green: #04b500;
  --brand-blue: #0689
}
</style>
