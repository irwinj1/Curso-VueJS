<template>  
   <Suspense>
  <template #default v-if="user">
    <home  />
   
  </template>
  <template #default v-if="!user">
    <login  />
   
  </template>
  <Footer />
  <template #fallback>
    <splash-screen></splash-screen>
  </template>
 
 </Suspense>

</template>

<script>
import { defineComponent,defineAsyncComponent } from 'vue';
import {mapState,mapMutations} from 'vuex'
// Components

import SplashScreen from '../components/SplashScreen.vue';
import Footer from '../components/Footer.vue';
export default defineComponent({
  name: 'HomeView',
data:()=>({
  
}),
  components: {
    SplashScreen,
    home: defineAsyncComponent(() => new Promise((resolve) => {
        setTimeout(() => {
            resolve(import("../components/HelloWorld.vue"));
        }, 1000);
    })),
    login: defineAsyncComponent(() => new Promise((resolve) => {
        setTimeout(() => {
            resolve(import("../components/Login.vue"));
        }, 1000);
    })),
    Footer
},
  computed:{
    ...mapState(['user']),
    
  },
  methods:{
    ...mapMutations(['setUser'])
  },
  created(){
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.setUser(user)
    }
    console.log(user);
  }

 
});
</script>
<style>

</style>