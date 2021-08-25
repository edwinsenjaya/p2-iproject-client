<template>
  <tr class="text-white text-center">
    <th>{{ i + 1 }}</th>
    <td>{{ el.name }}</td>
    <td class="">
      <div class="ms-1 me-2">{{ formattedCurrency }}</div>
    </td>
    <td class="d-flex justify-content-between">
      <form @change="converter">
        <select class="form-select form-select-sm" v-model="currency">
          <option :selected="el.currency === 'IDR'" value="IDR">IDR</option>
          <option :selected="el.currency === 'USD'" value="USD">USD</option>
          <option :selected="el.currency === 'EUR'" value="EUR">EUR</option>
          <option :selected="el.currency === 'AUD'" value="AUD">AUD</option>
          <option :selected="el.currency === 'SGD'" value="SGD">SGD</option>
          <option :selected="el.currency === 'JPY'" value="JPY">JPY</option>
          <option :selected="el.currency === 'ETH'" value="ETH">ETH</option>
        </select>
      </form>
    </td>
    <td>{{ formattedDate }}</td>
    <td>
      {{ el.Tags.map((el) => el.name).join(", ") }},
      <a @click.prevent="addMoreTag" href="" class="fw-light">add more</a>
    </td>
    <td>{{ el.location }}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-warning btn-sm" @click="editBtn">
          Edit
        </button>
        <button @click="deleteBtn" type="button" class="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import { format } from "date-fns";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "TransactionTable",
  data() {
    return {
      currency: "",
    };
  },
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
      } else return `ETH ${this.el.amount}`;
    },
  },
  methods: {
    ...mapMutations([
      "CHANGE_EDIT_DATA",
      "CHANGE_DELETE_DATA",
      "CHANGE_TAG_DATA",
    ]),
    ...mapActions(["deleteHandler", "fetchTransaction", "convertCurrency"]),
    editBtn() {
      this.CHANGE_EDIT_DATA(this.el);
      this.$router.push({ path: `/transaction/${this.el.id}` });
    },
    async deleteBtn() {
      this.CHANGE_DELETE_DATA(this.el);
      await this.deleteHandler();
      this.fetchTransaction();
    },
    async converter() {
      const payload = { id: this.el.id, convertTo: this.currency };
      await this.convertCurrency(payload);
      this.fetchTransaction();
    },
    addMoreTag() {
      this.CHANGE_TAG_DATA(this.el);
      this.$router.push({ name: "AddTag" });
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
