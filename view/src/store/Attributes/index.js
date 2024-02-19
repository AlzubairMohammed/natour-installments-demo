import request from "@/services/request";
const state = {
  attributes: [],
  session_url: "attributes",
  addError: [],
  config: {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  },
};

const getters = {
  allAttributes: (state) => {
    return state.attributes;
  },
};

const actions = {
  async fetchAttributes({ commit, state }) {
    let payload = {};
    payload.vendor_id = +JSON.parse(localStorage.getItem("userData")).id;
    payload.page = 1;
    payload.limit = 100;
    const response = await request.post(
      state.session_url + "/by-vendor-id/paginate",
      payload
    );
    commit("setAttributes", response.data);
  },
  async addAttribute({ commit, state }, attribute) {
    attribute.append(
      "vendor_id",
      +JSON.parse(localStorage.getItem("userData")).id
    );
    console.log(attribute);
    try {
      const response = await request.post(
        state.session_url,
        attribute,
        state.config
      );
      if (response.data.success) {
        commit("newAttribute", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateAttribute({ commit, state }, payload) {
    try {
      // loader
      console.log(payload);
      const id = payload.get("id");
      const response = await request.put(state.session_url, id, payload);
      if (response.data.success) {
        commit("editAttribute", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteAttribute({ commit, state }, id) {
    try {
      const response = await request.delete(state.session_url, id);
      if (response.data.success) {
        commit("removeAttribute", id);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};

const mutations = {
  setAttributes: (state, attributes) => {
    state.attributes = attributes;
  },
  newAttribute: (state, Attribute) => {
    state.attributes.unshift(Attribute);
  },
  removeAttribute: (state, id) => {
    let index = null;
    state.attributes.forEach((element) => {
      if (element.id == id) {
        index = state.attributes.indexOf(element);
        if (index > -1) {
          state.attributes.splice(index, 1);
        }
      }
    });
  },
  editAttribute: (state, data) => {
    state.attributes.forEach((element) => {
      if (element.id == data.id) {
        element = data.Attribute;
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
