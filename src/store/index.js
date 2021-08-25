import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    transactionData: [],
    editId: 0,
    userFullName: "",
    alertMessage: "",
    errorAlert: false,
  },
  mutations: {
    CHANGE_STATE_LOGIN(state, payload) {
      state.isLoggedIn = payload;
    },
    COMMIT_TRANSACTION(state, payload) {
      state.transactionData = payload;
    },
    CHANGE_EDIT_ID(state, payload) {
      state.editId = payload;
    },
    COMMIT_NAME(state, payload) {
      state.userFullName = payload;
    },
    ERROR_ALERT(state, payload = "") {
      state.alertMessage = payload;
      state.errorAlert = !state.errorAlert;
    },
  },
  actions: {
    async loginHandler(context, payload) {
      try {
        const res = await axios.post(`${baseUrl}/login`, payload);

        localStorage.setItem("access_token", res.data.access_token);

        context.commit("CHANGE_STATE_LOGIN", true);
        context.commit("CHANGE_ON_HOME", true);
        context.commit("COMMIT_NAME", res.data.fullName);
      } catch (err) {
        context.commit("ERROR_ALERT", err.response.data.message);
      }
    },

    async fetchTransaction(context) {
      try {
        const res = await axios.get(`${baseUrl}/transaction`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });

        context.commit("COMMIT_TRANSACTION", res.data);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async editHandler(context, payload) {
      try {
        const { id, name, amount, currency, date, location } = payload;
        await axios.put(
          `${baseUrl}/transaction/${id}`,
          { name, amount, currency, date, location },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  modules: {},
});
