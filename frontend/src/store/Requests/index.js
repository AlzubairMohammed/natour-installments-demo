import request from "@/services/request";
const state = {
  requests: [],
  url: "installments/requests",
};

const getters = {
  getRequests: (state) => {
    return state.requests;
  },
};

const actions = {
  async fetchRequests({ commit, state }) {
    const response = await request.get(state.url);
    commit("setRequests", response.data);
  },
};

const mutations = {
  setRequests: (state, requests) => {
    state.requests = requests;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
