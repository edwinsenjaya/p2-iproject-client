<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand fs-4 me-5">ExTrac</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              @click.prevent="gotoHome"
              class="nav-link active"
              aria-current="page"
              href=""
              >Home</a
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Chart</a>
          </li> -->
          <li class="nav-item">
            <a
              @click.prevent="viewCategory"
              class="nav-link active"
              aria-current="page"
              href=""
              >View Category</a
            >
          </li>
        </ul>
        <h5 class="text-dark me-4">
          Hello {{ userFullName }}! How are you today?
        </h5>
        <button @click="logoutBtn" class="btn btn-outline-danger" type="submit">
          Log Out
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["userFullName"]),
  },
  methods: {
    ...mapActions(["logoutHandler"]),
    logoutBtn() {
      this.logoutHandler();
      this.$router.push({ name: "Login" });
    },
    viewCategory() {
      this.$router.push({ name: "Tag" });
    },
    gotoHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
