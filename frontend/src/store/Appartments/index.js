import request from "@/services/request";

const state = {
  appartment: {},
  url: "appartments",
};

const getters = {
  getAppartment(state) {
    return state.appartment;
  },
};

const actions = {
  async getAppartment({ state, commit }, payload) {
    const data = await request.get(state.url, payload);
    commit("setAppartment", data);
  },
};

const mutations = {
  setAppartment({ state, appartment }) {
    state.appartment = appartment;
  },
};
