<template>
  <section id="transaction-list" class="page">
    <navbar></navbar>
    <div class="container d-flex flex-column vw-100">
      <div class="row mb-5">
        <h1 class="display-1 text-center">ExTrac App</h1>
      </div>
      <div class="row mb-5">
        <div class="col-10">
          <h5 v-if="transactionData.length === 0" class="display-4 text-center">
            Please add a transaction to see your data!
          </h5>
          <h5 v-if="transactionData[0]" class="display-4 text-center">
            Your current balance:
            {{ formattedCurrency(transactionData[0].User.balance) }}
          </h5>
        </div>
        <div class="col-2">
          <div class="row">
            <button
              id="add-budget-btn"
              type="button"
              class="btn btn-primary fs-5"
              data-bs-toggle="modal"
              data-bs-target="#budgetModal"
            >
              Add more budget
            </button>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-10">
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
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Convert</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="transaction-table">
              <transaction-table
                v-for="(el, i) in transactionData"
                :key="el.id"
                :el="el"
                :i="i"
              ></transaction-table>
            </tbody>
          </table>
        </div>
        <div class="col-2 flex-grow-1">
          <div class="row mb-5">
            <button
              id="add-transaction-btn"
              type="button"
              class="btn btn-success fs-5"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              Add new transaction
            </button>
          </div>
          <div class="row mb-5">
            <form class="d-flex flex-column">
              <input
                class="form-control mb-2"
                type="search"
                placeholder="Filter by name"
                v-model="filterName"
              />
              <button
                @click.prevent="filterBtn"
                class="btn btn-success mb-2"
                type="submit"
              >
                Filter
              </button>
              <button
                @click.prevent="resetFilter"
                class="btn btn-secondary"
                type="submit"
              >
                Reset
              </button>
            </form>
          </div>
          <div class="row mb-5">
            <h4 v-if="transactionData.length !== 0" class="text-center">
              Total Budget :
            </h4>
            <h4 v-if="transactionData[0]" class="text-center">
              {{ formattedCurrency(transactionData[0].User.budget) }}
            </h4>
          </div>
          <div class="row mb-5">
            <h4 v-if="transactionData.length !== 0" class="text-center">
              Saving Target :
            </h4>
            <h4 v-if="transactionData[0]" class="text-center">
              {{ formattedCurrency(transactionData[0].User.saving) }}
            </h4>
            <button
              id="saving-btn"
              type="button"
              class="btn btn-secondary fs-5"
              data-bs-toggle="modal"
              data-bs-target="#savingModal"
            >
              Change saving target
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL WINDOW -->
    <!-- SAVING -->
    <div
      class="modal fade text-black"
      id="savingModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Change Saving Target</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-floating mb-4">
                <input
                  type="number"
                  class="form-control"
                  id="floatingSaving"
                  placeholder="IDR"
                  v-model="changedSaving"
                />
                <label for="floatingSaving">IDR</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="changeSaving"
              data-bs-dismiss="modal"
              type="button"
              class="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD BUDGET -->
    <div
      class="modal fade text-black"
      id="budgetModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add More Budget</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-floating mb-4">
                <input
                  type="number"
                  class="form-control"
                  id="floatingBudget"
                  placeholder="IDR"
                  v-model="addedBudget"
                />
                <label for="floatingBudget">IDR</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              data-bs-dismiss="modal"
              @click="addBudget"
              type="button"
              class="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD NEW TRANSACTION -->
    <div
      class="modal fade text-black"
      id="addModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Transaction</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-2">
                <label class="col-form-label">Name:</label>
                <input type="text" class="form-control" v-model="addName" />
              </div>
              <div class="mb-2">
                <label class="col-form-label">Amount:</label>
                <input v-model="addAmount" type="number" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="col-form-label">Currency:</label>
                <select
                  v-model="addCurrency"
                  class="form-select form-select-sm"
                >
                  <option value="IDR">IDR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="AUD">AUD</option>
                  <option value="SGD">SGD</option>
                  <option value="JPY">JPY</option>
                  <option value="ETH">ETH</option>
                </select>
              </div>
              <div class="mb-2">
                <label class="col-form-label">Date:</label>
                <input v-model="addDate" type="date" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="col-form-label">Location:</label>
                <input
                  v-model="addLocation"
                  type="text"
                  placeholder="optional"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <label class="col-form-label">Tag:</label>
                <select v-model="addTag" class="form-select form-select-sm">
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
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="addTransaction"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import TransactionTable from "../components/TransactionTable.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  data() {
    return {
      addedBudget: 0,
      changedSaving: 0,
      addName: "",
      addAmount: 0,
      addCurrency: "",
      addDate: null,
      addLocation: "",
      addTag: 0,
      filterName: "",
    };
  },
  computed: {
    ...mapState(["transactionData"]),
  },
  components: { TransactionTable, Navbar },
  methods: {
    ...mapActions([
      "fetchTransaction",
      "addBudgetHandler",
      "changeSavingHandler",
      "addTransHandler",
    ]),
    ...mapMutations(["TOGGLE_MODAL_ADD"]),
    formattedCurrency(n) {
      const formatter = new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(n);
    },
    async addTransaction() {
      const payload = {
        name: this.addName,
        amount: this.addAmount,
        currency: this.addCurrency,
        date: this.addDate,
        location: this.addLocation,
        TagId: this.addTag,
      };
      await this.addTransHandler(payload);
      this.fetchTransaction();
      this.addName = "";
      this.addAmount = 0;
      this.addCurrency = "";
      this.addDate = null;
      this.addLocation = "";
      this.addTag = 0;
    },
    addBudget() {
      const payload = { addBudget: this.addedBudget };
      this.addBudgetHandler(payload);
      this.addedBudget = 0;
      this.fetchTransaction();
    },

    changeSaving() {
      const payload = { saving: this.changedSaving };
      this.changeSavingHandler(payload);
      this.changedSaving = 0;
      this.fetchTransaction();
    },
    async filterBtn() {
      const payload = {
        name: this.filterName,
      };

      await this.fetchTransaction(payload);
    },
    async resetFilter() {
      this.filterName = "";

      const payload = {
        name: null,
      };
      await this.fetchTransaction(payload);
    },
  },
  created() {
    this.fetchTransaction();
  },
};
</script>

<style>
.page {
  min-height: 100vh;
}
</style>
