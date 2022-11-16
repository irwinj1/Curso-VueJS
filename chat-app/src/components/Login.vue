<template>
  <v-container>
    <v-row class="justify-center box-login">
      <v-col cols="12" sm="12" md="5">
      
    <v-card class="mx-auto px-6 py-8">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="usuario.email"
          :readonly="loading"
          :rules="[rules.email]"
          class="mb-2"
          clearable
          append-inner-icon="mdi-account"
          variant="solo"
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="usuario.password"
         
            :rules="[rules.required, rules.min]"
            :type="mostrar ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            clearable
            variant="solo"
            
           
        >
        <template #[`append-inner`] >
            <v-icon  @click="mostrar=!mostrar" :color="mostrar?'indigo':'danger'">{{mostrar?'mdi-eye':'mdi-eye-off'}}</v-icon>
        </template>
        
    </v-text-field>

        <br>
        <p>Si no posees una cuenta <strong @click="$router.push('/register')">Registrate</strong></p>
        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="indigo darken-4"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script >
import {mapActions} from 'vuex'
export default{
    data:()=>({
        form:false,
        usuario:{
            email:'',
            password:''
        },
        mostrar:false,
        loading:false,
        rules:{
            email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Email invalido.'
          },
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || '8 Caracteres minimo',
        }
       
    }),
    methods:{
        ...mapActions(['login']),
        onSubmit(){
            if(!this.form)return

            this.loading = true
            this.login(this.usuario)
            setTimeout(()=>(this.loading=false),2000)
        }
    }
}
</script>

<style>
.box-login{
    
   margin-top: 10%;
}
</style>