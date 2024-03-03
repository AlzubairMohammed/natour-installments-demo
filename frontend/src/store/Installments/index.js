import request from "@/services/request";
import responseAlert from "../../services/sweet_alert";
import axios from "axios";
const state = {
  installments: [],
  isInstallmentCreated: false,
  url: "installments",
  // updateUrl: "http://localhost:7070/api/v1/installments",
  updateUrl: "http://inst.natour.ae/api/v1/installments",
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
  async updateMonth({ state }, payload) {
    const id = payload.get("id");
    const data = await axios.put(`${state.updateUrl}/months/${id}`, payload);
    if (data.data.data[0]) {
      // responseAlert("success", "نجاح", "تم تعديل حالة الدفع");
    } else {
      responseAlert("error", "خطاء", "عفوا حدث خطاء ما ");
    }
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
