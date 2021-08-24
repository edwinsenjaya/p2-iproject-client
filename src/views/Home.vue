<template>
  <section id="transport-list" class="page">
    <div class="container d-flex flex-column vh-100 vw-100">
      <div class="row mb-5">
        <h1 class="display-1 text-center">Car List</h1>
      </div>
      <div class="row mb-5">
        <button
          @click="addTransportBtn"
          id="add-transport-btn"
          type="button"
          class="btn btn-dark fs-5"
        >
          Add a Car
        </button>
      </div>
      <div class="row">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Image</th>
              <th scope="col">Location</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="transport-table">
            <transport-table
              v-for="(el, i) in transportData"
              :key="el.id"
              :el="el"
              :i="i"
              :transportData="transportData"
              :googleLoggedIn="googleLoggedIn"
              @delBtnHandler="deleteBtnHandler"
              @editBtn="editBtnHandler"
              @editStatusSelect="editStatusHandler"
            ></transport-table>
          </tbody>
        </table>
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
