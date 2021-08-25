<template>
  <tr class="text-white text-center">
    <th>{{ i + 1 }}</th>
    <td>{{ el.name }}</td>
    <td class="d-flex justify-content-between">
      <div class="ms-1 me-2">{{ formattedCurrency }}</div>
      <select class="form-select form-select-sm">
        <option :selected="el.currency === 'IDR'" value="IDR">IDR</option>
        <option :selected="el.currency === 'USD'" value="USD">USD</option>
        <option :selected="el.currency === 'EUR'" value="EUR">EUR</option>
        <option :selected="el.currency === 'AUD'" value="AUD">AUD</option>
        <option :selected="el.currency === 'SGD'" value="SGD">SGD</option>
        <option :selected="el.currency === 'JPY'" value="JPY">JPY</option>
        <option :selected="el.currency === 'ETH'" value="ETH">ETH</option>
      </select>
    </td>
    <td>{{ formattedDate }}</td>
    <td>{{ el.Tags.map((el) => el.name).join(", ") }}</td>
    <td>{{ el.location }}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-warning" @click="editBtn">
          Edit
        </button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </td>
  </tr>
</template>

<script>
import { format } from "date-fns";
import { mapMutations } from "vuex";

export default {
  name: "TransactionTable",
  props: ["el", "i"],
  computed: {
    formattedDate() {
      return format(new Date(this.el.date), "EE, dd LLL yyyy");
    },
    formattedCurrency() {
      const currency = ["USD", "IDR", "AUD", "EUR", "JPY", "SGD"];
      if (currency.includes(this.el.currency)) {
        const formatter = new Intl.NumberFormat("en-ID", {
          style: "currency",
          currency: this.el.currency,
        });

        return formatter.format(this.el.amount);
      } else return this.el.amount;
    },
  },
  methods: {
    ...mapMutations(["CHANGE_EDIT_ID"]),
    editBtn() {
      this.CHANGE_EDIT_ID(this.el.id);
      this.$router.push({ path: `/transportation/${this.el.id}` });
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
