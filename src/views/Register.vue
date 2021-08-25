<template>
  <section id="register" class="page">
    <div class="container d-flex flex-column justify-content-center">
      <div class="row mb-5">
        <h1 class="display-1 text-center">ExTrac App</h1>
      </div>
      <div class="row align-items-center mb-3">
        <h4 class="display-6 text-center">Register User</h4>
      </div>
      <div class="row align-items-center mb-3">
        <h6 class="text-center">
          Already have an account? Log in <a href="">here</a>
        </h6>
      </div>

      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <form class="mb-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                v-model="registerEmail"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                aria-describedby="passwordHelp"
                v-model="registerPassword"
              />
              <div id="passwordHelp" class="form-text">
                Your password must be at least 5 characters
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input v-model="registerName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Phone Number</label>
              <input
                v-model="registerPhone"
                type="text"
                class="form-control"
                placeholder="optional"
              />
            </div>
            <div class="mb-4">
              <label class="form-label">Address</label>
              <input
                v-model="registerAddress"
                type="text"
                class="form-control"
                placeholder="optional"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Starting Budget</label
              >
              <input
                type="number"
                class="form-control"
                aria-describedby="budgetHelp"
                v-model="registerBudget"
              />
              <div id="budgetHelp" class="form-text">
                Input your starting budget
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Starting Budget</label
              >
              <input
                type="number"
                class="form-control"
                aria-describedby="savingHelp"
                v-model="registerSaving"
              />
              <div id="savingHelp" class="form-text">Set a saving target</div>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapActions } from "vuex";
// import { mapMutations } from "vuex";

export default {
  name: "Register",
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

<style></style>
