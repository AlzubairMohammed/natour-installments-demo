import request from "@/services/request";

const state = {
  appartment: {},
  appartments: [],
  url: "appartments",
};

const getters = {
  getAppartment(state) {
    return state.appartment;
  },
  getAppartments(state) {
    return state.appartments;
  },
};

const actions = {
  async getAppartments({ state, commit }) {
    const response = await request.get(state.url);
    commit("setAppartments", response.data);
  },
  async getAppartment({ state, commit }, payload) {
    const response = await request.get(state.url, payload);
    commit("setAppartment", response.data);
  },
  async deleteAppartment({ state }, payload) {
    await request.delete(state.url, payload);
  },
  async createAppartment({ state }, payload) {
    await request.post(state.url, payload);
  },
};

const mutations = {
  setAppartment: (state, appartment) => {
    state.appartment = appartment;
  },
  setAppartments: (state, appartments) => {
    state.appartments = appartments;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
