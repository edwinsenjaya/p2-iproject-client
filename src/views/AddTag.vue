<template>
  <section id="addTag" class="page">
    <navbar></navbar>
    <div class="container d-flex flex-column justify-content-center mt-4">
      <div class="row mb-5">
        <h1 class="display-1 text-center">ExTrac App</h1>
      </div>
      <div class="row align-items-center mb-3">
        <h4 class="display-6 text-center">Add more tag</h4>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <form class="mb-3 d-flex flex-column" @submit.prevent="submitTag">
            <div class="mb-3">
              <select
                v-model="addedTag"
                class="form-select form-select-sm w-100"
              >
                <option selected disabled>select tag</option>
                <option value="1">food</option>
                <option value="2">transportation</option>
                <option value="3">entertainment</option>
                <option value="4">essential</option>
                <option value="5">clothing</option>
                <option value="6">utility</option>
                <option value="7">health</option>
                <option value="8">grocery</option>
                <option value="9">tax</option>
                <option value="10">emergency</option>
                <option value="11">monthly</option>
                <option value="12">weekly</option>
                <option value="13">daily</option>
                <option value="14">special</option>
                <option value="15">others</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "../components/Navbar.vue";

export default {
  name: "AddTag",
  data() {
    return {
      addedTag: 0,
    };
  },
  components: { Navbar },
  computed: {
    ...mapState(["addTagData"]),
  },
  methods: {
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
    ...mapActions(["addTag"]),

    async backToHome() {
      this.$router.push({ name: "Home" });
    },
    async submitTag() {
      const payload = { id: this.addTagData.id, addedTag: this.addedTag };
      await this.addTag(payload);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
