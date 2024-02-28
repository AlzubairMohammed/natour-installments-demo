import request from "@/services/request";
const state = {
  requests: [],
  request: {},
  url: "installments/requests",
};

const getters = {
  getRequests: (state) => {
    return state.requests;
  },
  getRequest: (state) => {
    return state.request;
  },
};

const actions = {
  async fetchRequests({ commit, state }) {
    const response = await request.get(state.url);
    commit("setRequests", response.data);
  },
  async getRequest({ commit, state }, payload) {
    const data = await request.get(state.url, payload);
    commit("setRequest", data);
  },
  async updateRequest({ commit, state }, payload) {
    const data = await request.put(state.url, payload);
    commit("updateRequest", data);
  },
};

const mutations = {
  setRequests: (state, requests) => {
    state.requests = requests;
  },
  setRequest: (state, request) => {
    state.request = request;
  },
  updateRequest: (state, request) => {
    state.requests.forEach((element) => {
      if (element.id == request.id) {
        element = request;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
