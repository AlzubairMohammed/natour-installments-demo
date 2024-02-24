import request from "@/services/request";
const state = {
  installments: [],
  Categories: [],
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
  getCategories: (state) => {
    return state.Categories;
  },
};

const actions = {
  async fetchInstallments({ commit, state }) {
    const response = await request.get(state.url);
    commit("setInstallments", response.data);
  },
  async fetchCategories({ commit, state }) {
    const response = await request.get(state.get_categories_url);
    commit("setCategories", response.data);
  },
  async addProduct({ commit, state }, Product) {
    Product.product_data.vendor_id = +JSON.parse(
      localStorage.getItem("userData")
    ).id;
    try {
      const response = await request.post(
        state.session_url,
        Product,
        state.config
      );
      if (response.data.success) {
        commit("newProduct", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateProduct({ commit, state }, payload) {
    console.log(payload);
    try {
      // loader
      const { id, Product } = payload;
      const response = await request.put(`${state.session_url}/${id}`, Product);
      if (response.data.success) {
        commit("editProduct", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteProduct({ commit, state }, id) {
    try {
      const response = await request.delete(state.session_url, id);
      if (response.data.success) {
        commit("removeProduct", id);
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
  setInstallments: (state, installments) => {
    state.installments = installments;
  },
  setCategories: (state, Categories) => {
    state.Categories = Categories;
  },
  newProduct: (state, Product) => {
    state.Products.unshift(Product);
  },
  removeProduct: (state, id) => {
    let index = null;
    state.Products.forEach((element) => {
      if (element.id == id) {
        index = state.Products.indexOf(element);
        if (index > -1) {
          state.Products.splice(index, 1);
        }
      }
    });
  },
  editProduct: (state, data) => {
    state.Products.forEach((element) => {
      if (element.id == data.id) {
        element = data.Product;
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
