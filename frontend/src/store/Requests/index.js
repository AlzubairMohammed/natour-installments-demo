import request from "@/services/request";
import axios from "axios";
import responseAlert from "../../services/sweet_alert";
const state = {
  requests: [],
  request: {},
  url: "installments/requests",
  // updateUrl: "http://inst.natour.ae/api/v1/installments/requests",
  updateUrl: "http://localhost:7070/api/v1/installments/requests",
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
    const data = response.data.filter((item) => item.is_accepted === null);
    commit("setRequests", data);
  },
  async getRequest({ commit, state }, payload) {
    const data = await request.get(state.url, payload);
    commit("setRequest", data);
  },
  async updateRequest({ commit, state }, payload) {
    const data = await axios.put(`${state.updateUrl}/${payload.id}`, payload);
    if (payload.is_accepted == true) return 0;
    if (data.data.request[0]) {
      responseAlert("success", "نجاح", "تم رفض الطلب");
    } else {
      responseAlert("error", "خطاء", "عفوا حدث خطاء ما ");
    }
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
