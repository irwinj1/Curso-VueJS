<template>
   <v-bottom-navigation  bg-color="indigo">
  <v-btn v-for="link in links" :key="link.name" :to="link.path" :value="link.name" class="mx-9" >
    <v-icon>{{link.icon}}</v-icon>

    {{link.name}}
  </v-btn>

 
</v-bottom-navigation>
</template>

<script>
export default {
    data: () => ({
      links: [
       {
        name:'Home',
        icon:'mdi-home',
        path:'/'
       },
       {
        name:'Account',
        icon:'mdi-account',
        path:'/users'
       }
      ],
    }),
}
</script>

<style>

</style>