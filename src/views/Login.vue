<template>
  <section id="login" class="page">
    <div class="d-flex flex-column">
      <div class="row p-0 m-0">
        <div class="col-4 left">
          <div class="row mb-2">
            <h2 class="display-1 text-center">ExTrac</h2>
          </div>
          <div class="row mb-5">
            <h5 class="text-center">A simple expense tracker application</h5>
          </div>
          <div class="row align-items-center mt-2 mb-4">
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
        <div class="col-8 image"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

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
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["loginHandler"]),
    ...mapMutations(["ERROR_ALERT"]),
    async loginBtn() {
      const payload = {
        email: this.loginEmail,
        password: this.loginPassword,
      };
      await this.loginHandler(payload);
      this.$router.push({ name: "Home" });
    },
    registerLink() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
}

#login-form {
  width: 80%;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  justify-content: center;
}

.image {
  background: url(../assets/login-image.jpg);
  background-size: cover;
  height: 100vh;
  border-radius: 10px;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
