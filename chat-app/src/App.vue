<template>
  <v-app>
   <!--Menu :user="user" class="box-menu"/-->
    <v-main>
      <router-view/>
    
    </v-main>
    <Footer class=" box-footer" />
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import Menu from '@/components/Menu.vue'
import Footer from './components/Footer.vue';
export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { Menu,Footer },
    computed:{
      ...mapState(['user'])
    }
}
</script>
<style>
.box-menu{
  display: flex;
  position: absolute;
  top: 0;
  width: 100vw;
}
.box-footer{
  display: flex;
    position: absolute;
    bottom: 0;
    width: 100vw;
}
</style>