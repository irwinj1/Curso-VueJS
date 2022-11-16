<template>
  <v-container>
    <v-row class="justify-center box-login">
      <v-col cols="12" sm="12" md="5">
        <v-card class="mx-auto px-6 py-8" title="Registro">
          <v-text-field
            v-model="usuario.name"
            color="primary"
            label="Nombre"
            variant="solo"
          ></v-text-field>

          <v-text-field
            v-model="usuario.lastName"
            color="primary"
            label="Apellido"
            variant="solo"
          ></v-text-field>

          <v-text-field
            v-model="usuario.email"
            color="primary"
            label="Email"
            variant="solo"
          ></v-text-field>

          <v-text-field
            v-model="usuario.password"
            :type="mostrar ? 'text' : 'password'"
            color="primary"
            label="Password"
            placeholder="Ingrese su contraseña"
            variant="solo"
          >
            <template #[`append-inner`]>
              <v-icon
                @click="mostrar = !mostrar"
                :color="mostrar ? 'indigo' : 'danger'"
                >{{ mostrar ? "mdi-eye" : "mdi-eye-off" }}</v-icon
              >
            </template>
          </v-text-field>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="indigo" @click="crearUsuario">
              Completar registro

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data: () => ({
    mostrar: false,
    usuario: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(["singup"]),
    crearUsuario() {
      this.singup(this.usuario);
      this.usuario.name = "";
      this.usuario.lastName = "";
      this.usuario.email = "";
      this.usuario.password = "";
     
    },
  },
};
</script>

<style>
</style>