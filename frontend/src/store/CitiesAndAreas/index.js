import axios from "axios";
import request from "@/services/request";
const state = {
  cities: [],
  areas: [],
  cities_url: "https://admin.natour.ae/api/city",
  areas_url: "https://admin.natour.ae/api/area",
  addError: [],
  config: {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  },
};

const getters = {
  getCities: (state) => {
    return state.cities;
  },
  getAreas: (state) => {
    return state.areas;
  },
};

const actions = {
  async getCities({ commit, state }) {
    const response = await axios.get(state.cities_url);
    console.log(response.data.data);
    commit("setCities", response.data.data.cities);
  },
  async getAreas({ commit, state }, city_id) {
    let data = {};
    data.city_id = city_id;
    const response = await axios.post(state.areas_url, data);
    commit("setAreas", response.data.data.areas);
  },
};

const mutations = {
  setCities: (state, cities) => {
    state.cities = cities;
  },
  setAreas: (state, areas) => {
    state.areas = areas;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
