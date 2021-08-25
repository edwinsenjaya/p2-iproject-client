import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    transactionData: [],
    tagData: [],
    editData: {},
    deleteData: {},
    addTagData: {},
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
    CHANGE_EDIT_DATA(state, payload) {
      state.editData = payload;
    },
    CHANGE_DELETE_DATA(state, payload) {
      state.deleteData = payload;
    },
    COMMIT_TAGS(state, payload) {
      state.tagData = payload;
    },
    CHANGE_TAG_DATA(state, payload) {
      state.addTagData = payload;
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
        localStorage.setItem("name", res.data.fullName);

        context.commit("CHANGE_STATE_LOGIN", true);
        context.commit("COMMIT_NAME", res.data.fullName);
      } catch (err) {
        context.commit("ERROR_ALERT", err.response.data.message);
      }
    },

    async logoutHandler(context) {
      try {
        localStorage.clear();

        context.commit("CHANGE_STATE_LOGIN", false);
        context.commit("COMMIT_NAME", "");
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
        context.commit("COMMIT_NAME", localStorage.getItem("name"));
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async registerHandler(context, payload) {
      try {
        const {
          email,
          password,
          fullName,
          phoneNumber,
          address,
          budget,
          saving,
        } = payload;

        await axios.post(`${baseUrl}/register`, {
          email,
          password,
          fullName,
          phoneNumber,
          address,
          budget,
          saving,
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async addTransHandler(context, payload) {
      try {
        await axios.post(`${baseUrl}/transaction`, payload, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async addBudgetHandler(context, payload) {
      try {
        await axios.patch(`${baseUrl}/budget`, payload, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async changeSavingHandler(context, payload) {
      try {
        await axios.patch(`${baseUrl}/saving`, payload, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
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
        context.commit("CHANGE_EDIT_DATA", {});
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async fetchTag(context) {
      try {
        const res = await axios.get(`${baseUrl}/tag`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });

        context.commit("COMMIT_TAGS", res.data);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async addTag(context, payload) {
      try {
        await axios.put(
          `${baseUrl}/tag/${payload.id}`,
          { addedTag: payload.addedTag },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        context.commit("CHANGE_TAG_DATA", {});
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async convertCurrency(context, payload) {
      try {
        await axios.patch(
          `${baseUrl}/transaction/currency/${payload.id}`,
          { convertTo: payload.convertTo },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteHandler(context) {
      try {
        await axios.delete(
          `${baseUrl}/transaction/${this.state.deleteData.id}`,
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        context.commit("CHANGE_DELETE_DATA", {});
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  modules: {},
});
