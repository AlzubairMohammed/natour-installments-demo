import { createStore } from "vuex";

import users from "./users";
import Installments from "./Installments";
import CitiesAndAreas from "./CitiesAndAreas";
import Requests from "./Requests";
import Appartments from "./Appartments";

export default createStore({
  modules: {
    users,
    Installments,
    CitiesAndAreas,
    Requests,
    Appartments,
  },
});
