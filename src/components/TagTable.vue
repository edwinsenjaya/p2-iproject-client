<template>
  <tr class="text-white text-center">
    <th>{{ i + 1 }}</th>
    <td>{{ el.name }}</td>
    <td>{{ el.Transactions.length }}</td>
  </tr>
</template>

<script>
export default {
  name: "TagTable",
  data() {
    return {};
  },
  props: ["el", "i"],
  computed: {},
  methods: {},
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
