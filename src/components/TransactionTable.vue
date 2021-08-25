<template>
  <tr class="text-white text-center">
    <th>{{ i + 1 }}</th>
    <td>{{ el.name }}</td>
    <td class="d-flex justify-content-between">
      <div class="me-2">{{ el.amount }}</div>
      <select
        class="form-select form-select-sm"
        aria-label="Default select example"
      >
        <option value="IDR">IDR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="AUD">AUD</option>
        <option value="SGD">SGD</option>
        <option value="JPY">JPY</option>
        <option value="ETH">ETH</option>
      </select>
    </td>
    <td>{{ formatedDate }}</td>
    <td>Food</td>
    <td>{{ el.Location }}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-warning">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </td>
  </tr>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "TransactionTable",
  props: ["el", "i"],
  computed: {
    formatedDate() {
      return format(new Date(this.el.date), "EE, dd LLL yyyy");
    },
  },
};
</script>

<style>
.amount {
  justify-content: space-between;
}
.form-select {
  width: 100px !important;
}
</style>
