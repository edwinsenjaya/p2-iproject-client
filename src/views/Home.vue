<template>
  <section id="transaction-list" class="page">
    <div class="container d-flex flex-column vw-100">
      <div class="row mb-5">
        <h1 class="display-1 text-center">ExTrac</h1>
      </div>
      <div class="row mb-5">
        <div class="col-10">
          <h5 class="display-4 text-center">
            Your current balance: Rp 100.000.000
          </h5>
        </div>
        <div class="col-2">
          <div class="row">
            <button
              @click="addBudgetBtn"
              id="add-budget-btn"
              type="button"
              class="btn btn-primary fs-5"
            >
              Add more budget
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-10">
          <table
            class="table table-bordered table-striped table-hover text-white"
          >
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col" class="text-center">Name</th>
                <th scope="col" class="text-center">Amount</th>
                <th scope="col" class="text-center">Currency</th>
                <th scope="col" class="text-center">Date</th>
                <th scope="col" class="text-center">Category</th>
                <th scope="col" class="text-center">Location</th>
              </tr>
            </thead>
            <tbody id="transaction-table">
              <!-- <transaction-table
              v-for="(el, i) in transactionData"
              :key="el.id"
              :el="el"
              :i="i"
            ></transaction-table> -->
            </tbody>
          </table>
        </div>
        <div class="col-2 d-flex flex-column">
          <div class="row mb-5 flex-grow-1">
            <button
              @click="addTransactionBtn"
              id="add-transaction-btn"
              type="button"
              class="btn btn-success fs-5"
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
                aria-label="Search"
              />
              <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
          <div class="row mb-5">
            <h4 class="text-center">Saving Target :</h4>
            <h4 class="text-center mb-3">Rp 10.000.000</h4>
            <button
              @click="savingBtn"
              id="saving-btn"
              type="button"
              class="btn btn-secondary fs-5"
            >
              Change saving target
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.page {
  min-height: 100vh;
}
</style>
