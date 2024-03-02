import request from "@/services/request";
const state = {
  installments: [],
  isInstallmentCreated: false,
  url: "installments",
  addError: [],
  config: {
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      // "Content-Type": "application/xml",
    },
  },
};

const getters = {
  getInstallments: (state) => {
    return state.installments;
  },
  getIsInstallmentCreated: (state) => {
    return state.isInstallmentCreated;
  },
};

const actions = {
  async fetchInstallments({ commit, state }) {
    const response = await request.get(state.url);
    commit("setInstallments", response.data);
  },
  async createInstallment({ state }, payload) {
    state.isInstallmentCreated = await request.post(state.url, payload);
  },
};

const mutations = {
  setInstallments: (state, installments) => {
    state.installments = installments;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
