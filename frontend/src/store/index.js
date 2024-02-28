import { createStore } from "vuex";

import users from "./users";
import Installments from "./Installments";
import Attributes from "./Attributes";
import Requests from "./Requests";
import Appartments from "./Appartments";

export default createStore({
  modules: {
    users,
    Installments,
    Attributes,
    Requests,
    Appartments,
  },
});
