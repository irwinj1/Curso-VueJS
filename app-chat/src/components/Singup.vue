<template>
  <div class="mt-4">
    <h2>Welcome to Vue.js Chat App</h2>
    <form class="detail-box my-5">
      <div class="form-group my-3">
        <h4>Signup to Chat</h4>
        <input
          type="text"
          v-model="name"
          class="form-control mb-4 mt-4"
          placeholder="Enter your name..."
        />
        <input
          type="text"
          v-model="email"
          class="form-control mb-4"
          placeholder="Enter your email..."
        />
        <input
          type="password"
          v-model="password"
          class="form-control mb-4"
          placeholder="Enter your password..."
        />
        <router-link :to="{ path: '/' }">
          <h6 class="mb-3" style="font-weight: 600">Back to login</h6>
        </router-link>
        <button
          style="font-weight: 600"
          type="button"
          @click="signup"
          class="btn btn-primary"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "../services/firebase.js";
export default {
  name: "SingUp",
  data: () => ({
    name: "",
    email: "",
    password: "",
  }),
  methods: {
    signup() {
      const auth = firebase.auth();
      const name = this.name;
      const email = this.email;
      const password = this.password;

      auth.createUserWithEmailAndPassword(email, password).then(async (res) => {
        console.log(res);
        await firebase
          .firestore()
          .collection("users")
          .add({
            name,
            id: res.user.uid,
            email,
            password,
            URL: "",
            description: "",
          })
          .then((ref) => {
            localStorage.setItem("id", res.user.uid);
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("photoURL", "");
            localStorage.setItem("description", "");
            localStorage.setItem("FirebaseDocumentId", ref.id);
            this.name = "";
            this.email = "";
            this.password = "";
            this.$router.push("/chat");
          })
          .catch((err) => {
            var errorCode = err.code;
            var errormessage = err.message;
            Vue.toasted.show(errorCode).goAway(1500);
            Vue.toasted.show(errormessage).goAway(1500);
          });
      });
    },
  },
};
</script>

<style>
</style>