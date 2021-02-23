export const authModule = {
    namespaced: true,
    state: {
        isAuthenticated: false,
        token: "",
        email: "",
    },
    mutations: {
        authenticate(state, payload) {
            state.isAuthenticated = true;
            state.token = payload.token;
            state.email = payload.email;
        },
        logOut(state) {
            state.isAuthenticated = false;
            state.token = "";
            state.email = "";
        },
    },
    actions: {
        authenticate({ commit }, payload) {
            commit("authenticate", payload);
        },
        logOut({ commit }) {
            commit("logOut");
        },
    },
};
