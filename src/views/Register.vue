<template>
  <section id="login" class="page">
    <div class="container d-flex flex-column justify-content-center vw-100">
      <div class="row">
        <div class="col-4">
          <div class="row mb-5">
            <h2 class="display-1 text-center">ExTrac</h2>
          </div>
          <div class="row align-items-center mb-4">
            <h4 class="display-6 text-center">Register</h4>
          </div>
          <form
            id="register-form"
            method="POST"
            @submit.prevent="submitRegister"
          >
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="text"
                id="register-email"
                class="form-control"
                v-model="registerEmail"
              />
            </div>
            <div class="mb-4">
              <label class="form-label">Password</label>
              <input
                type="password"
                id="register-password"
                class="form-control"
                v-model="registerPassword"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input
                type="text"
                id="register-name"
                class="form-control"
                v-model="registerName"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Phone Number</label>
              <input
                type="text"
                id="register-phone"
                class="form-control"
                placeholder="optional"
                v-model="registerPhone"
              />
            </div>
            <div class="mb-4">
              <label class="form-label">Address</label>
              <input
                type="text"
                id="register-address"
                class="form-control"
                placeholder="optional"
                v-model="registerAddress"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Starting Budget</label>
              <input
                type="number"
                id="register-budget"
                class="form-control"
                placeholder="Please input your starting budget"
                v-model="registerBudget"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Saving Target</label>
              <input
                type="number"
                id="register-saving"
                class="form-control"
                placeholder="Please input your saving target"
                v-model="registerSaving"
              />
            </div>
            <button type="submit" class="btn btn-primary mb-5">Register</button>
          </form>
          <h6 class="mb-5">
            <a href="" @click.prevent="loginPageLink">Back to login page</a>
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
      registerEmail: "",
      registerPassword: "",
      registerName: "",
      registerPhone: "",
      registerAddress: "",
      registerBudget: 0,
      registerSaving: 0,
    };
  },
  components: {},
  computed: {},
  methods: {
    // ...mapActions(["registerHandler"]),
    // ...mapMutations(["CHANGE_ON_HOME"]),
    // loginPageLink() {
    //   this.$router.push({ name: "Login" });
    // },
    // async submitRegister() {
    //   const payload = {
    //     email: this.registerEmail,
    //     password: this.registerPassword,
    //     username: this.registerUsername,
    //     phoneNumber: this.registerPhone,
    //     address: this.registerAddress,
    //   };
    //   try {
    //     await this.registerHandler(payload);
    //     this.$router.push({ name: "Login" });
    //     this.CHANGE_ON_HOME(false);
    //     this.registerEmail = "";
    //     this.registerPassword = "";
    //     this.registerUsername = "";
    //     this.registerPhone = "";
    //     this.registerAddress = "";
    //   } catch (err) {
    //     console.log(err);
    //   }
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
