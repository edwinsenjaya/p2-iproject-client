<template>
  <section id="tag-list" class="page">
    <navbar></navbar>
    <div class="container d-flex flex-column vw-100 mt-4">
      <div class="row mb-3">
        <h1 class="display-1 text-center">Category List</h1>
      </div>
      <div class="row d-flex">
        <div class="col-3"></div>
        <div class="col-6">
          <table
            class="
              table table-bordered table-striped table-hover
              text-white
              table-sm
              mb-5
            "
          >
            <thead class="text-center">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Category Name</th>
                <th scope="col">Number of Transaction(s)</th>
              </tr>
            </thead>
            <tbody id="tag-table">
              <tag-table
                v-for="(el, i) in tagData"
                :key="el.id"
                :el="el"
                :i="i"
              ></tag-table>
            </tbody>
          </table>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TagTable from "../components/TagTable.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Tag",
  data() {
    return {};
  },
  computed: {
    ...mapState(["tagData"]),
  },
  components: { Navbar, TagTable },
  methods: {
    ...mapActions(["fetchTag"]),
    backToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  async created() {
    await this.fetchTag();
  },
};
</script>

<style>
.page {
  min-height: 100vh;
}
</style>
