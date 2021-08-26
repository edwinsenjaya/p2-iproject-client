<template>
  <div
    class="alert alert-danger alert-dismissible fade show"
    role="alert"
    style="position: fixed; top: 0px; width: 100%"
  >
    {{ alertMessage }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="errAlertDismiss"
    ></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ErrorAlert",
  computed: {
    ...mapState(["alertMessage"]),
  },
  methods: {
    ...mapMutations(["ERROR_ALERT"]),
    errAlertDismiss() {
      this.ERROR_ALERT();
    },
  },
};
</script>

<style></style>
