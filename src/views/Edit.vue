<template>
  <section id="edit" class="page">
    <navbar></navbar>
    <div class="container d-flex flex-column justify-content-center mt-4">
      <div class="row mb-5">
        <h1 class="display-1 text-center">ExTrac App</h1>
      </div>
      <div class="row align-items-center mb-3">
        <h4 class="display-6 text-center">Edit Transaction</h4>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <form class="mb-3" @submit="editSubmit">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                v-model="editName"
                type="text"
                class="form-control"
                :placeholder="editData.name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Amount</label>
              <input
                :placeholder="editData.amount"
                v-model="editAmount"
                type="number"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="col-form-label">Currency:</label>
              <select class="form-select form-select-sm" v-model="editCurrency">
                <option value="IDR">IDR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
                <option value="SGD">SGD</option>
                <option value="JPY">JPY</option>
                <option value="ETH">ETH</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Date</label>
              <input v-model="editDate" type="date" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Location</label>
              <input
                v-model="editLocation"
                type="text"
                class="form-control"
                :placeholder="editData.location"
              />
            </div>

            <button type="submit" class="btn btn-primary">Edit</button>
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
  name: "Register",
  data() {
    return {
      editName: "",
      editAmount: 0,
      editCurrency: "",
      editDate: null,
      editLocation: "",
    };
  },
  components: { Navbar },
  computed: {
    ...mapState(["editData"]),
  },
  methods: {
    ...mapActions(["editHandler", "fetchTransaction"]),
    homeBtn() {
      this.$router.push({ name: "Home" });
    },
    async editSubmit() {
      const payload = {
        id: this.editData.id,
        name: this.editName,
        amount: this.editAmount,
        currency: this.editCurrency,
        date: this.editDate,
        location: this.editLocation || "No location specified",
      };
      this.editHandler(payload);
      this.fetchTransaction();
      this.$router.push({ name: "Home" });
      this.editName = "";
      this.editAmount = 0;
      this.editCurrency = "";
      this.editDate = null;
      this.editLocation = "";
    },
  },
};
</script>

<style></style>
