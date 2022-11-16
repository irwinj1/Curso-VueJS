<template>
   <div class="mt-4">
    <h2>Welcome to Vue.js Chat App</h2>
    <form class="detail-box my-5">
      <div class="form-group my-3">
        <h4>Login to Chat</h4>
        <input
          type="text"
          v-model="email"
          class="form-control mb-4 mt-4"
          placeholder="Enter your email..."
        />
        <input
          type="password"
          v-model="password"
          class="form-control mb-4"
          placeholder="Enter your password..."
          @keyup.enter="login"
        />
        <router-link :to="{ path: 'singup' }">
          <h6 class="mb-3" style="font-weight: 600">Crear cuenta</h6>
        </router-link>

        <button
          type="button"
          @click="login"
          class="btn btn-primary"
          style="font-weight: 600"
        >Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:'Login',
    data:()=>({
        email:'',
        password:''
    }),
    methods:{
        login(){
            console.log('login...');
        }
    }

}
</script>

<style>
input[type="text"],
input[type="password"] {
  margin: 0 auto;
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0px;
}
.detail-box {
  padding: 5px;
  box-shadow: 1px 1px 15px lightgrey;
  width: 35vw;
  min-height: 250px;
  margin: 0 auto;
}
h2,
h4 {
  color: dodgerblue;
  font-weight: 600;
}
@media only screen and (max-width: 600px)  {
    .detail-box {
  padding: 5px;
  box-shadow: 1px 1px 15px lightgrey;
  width: 85vw;
  min-height: 250px;
  margin: 0 auto;
}
}
</style>