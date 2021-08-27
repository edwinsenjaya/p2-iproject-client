<template>
  <div id="app" class="d-flex flex-column">
    <success-alert v-if="successAlert"></success-alert>
    <error-alert v-if="errorAlert"></error-alert>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import { mapMutations, mapState } from "vuex";
import SuccessAlert from "./components/SuccessAlert.vue";
import ErrorAlert from "./components/ErrorAlert.vue";

export default {
  name: "App",
  components: { HFooter, SuccessAlert, ErrorAlert },
  computed: {
    ...mapState(["errorAlert", "successAlert"]),
  },
  methods: {
    ...mapMutations(["COMMIT_NAME", "CHANGE_STATE_LOGIN"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.COMMIT_NAME(localStorage.getItem("name"));
      this.CHANGE_STATE_LOGIN(true);
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style></style>
