<template>
  <section id="login" class="page">
    <div class="container d-flex flex-column justify-content-center vw-100">
      <div class="row">
        <div class="col-4">
          <div class="row mb-5">
            <h2 class="display-1 text-center">ExTrac</h2>
          </div>
          <div class="row align-items-center mb-4">
            <h4 class="display-6 text-center">Log In</h4>
          </div>
          <form id="login-form" class="text-dark" method="POST">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="loginEmail"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="loginPassword"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              type="submit"
              class="btn btn-primary mb-4"
              @click.prevent="loginBtn"
            >
              Login
            </button>
          </form>
          <h6 class="mb-3">
            Don't have an account yet? Register
            <a @click.prevent="registerLink" href="">here</a>
          </h6>
        </div>
        <div class="col-8">
          <img
            src="../assets/login-image.jpg"
            class="img-fluid rounded"
            alt="../assets/login-image.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  components: {},
  computed: {
    // ...mapState(["isLoggedIn", "googleLoggedIn"]),
  },
  methods: {
    // ...mapActions(["loginHandler", "onSignIn"]),
    // ...mapMutations(["CHANGE_ON_HOME", "ERROR_ALERT"]),
    // async loginBtn() {
    //   const payload = {
    //     email: this.loginEmail,
    //     password: this.loginPassword,
    //   };
    //   await this.loginHandler(payload);
    //   this.$router.push({ name: "TransportList" });
    // },
    // async googleSignIn() {
    //   const googleUser = await this.$gAuth.signIn();
    //   const idToken = googleUser.getAuthResponse().id_token;
    //   await this.onSignIn(idToken);
    //   this.$router.push({ name: "TransportList" });
    // },
    // registerLink() {
    //   this.$router.push({ name: "Register" });
    //   this.CHANGE_ON_HOME(false);
    // },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
}
/* img {
  width: auto;
  height: 100vh;
} */
</style>
