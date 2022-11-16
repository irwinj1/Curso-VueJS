<template>
     <v-system-bar color="indigo">
  

 
</v-system-bar>

</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        user:{
            type:String
        }
    },
    methods:{
        ...mapActions(['logout']),
        cerrarSesion(){
            this.logout()
            localStorage.clear()
            this.$router.replace('/')
        }
    }

}
</script>

<style>

</style>