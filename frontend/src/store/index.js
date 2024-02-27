import { createStore } from "vuex";

import users from "./users";
import Installments from "./Installments";
import Attributes from "./Attributes";
import Requests from "./Requests";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    Installments,
    Attributes,
    Requests,
  },
});
