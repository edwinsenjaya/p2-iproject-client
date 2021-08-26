<template>
  <div
    class="alert alert-success alert-dismissible fade show"
    role="alert"
    style="position: fixed; top: 0px; width: 100%"
  >
    {{ alertMessage }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="succAlertDismiss"
    ></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SuccessAlert",
  computed: {
    ...mapState(["alertMessage"]),
  },
  methods: {
    ...mapMutations(["SUCCESS_ALERT"]),
    succAlertDismiss() {
      this.SUCCESS_ALERT();
    },
  },
};
</script>

<style></style>
