import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import {authModule} from "./authModule";
import {cartModule} from "./cartModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: authModule,
        product: cartModule
    },
    plugins: [createPersistedState()],
});
