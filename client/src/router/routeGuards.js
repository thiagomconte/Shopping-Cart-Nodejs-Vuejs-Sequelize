import store from "../store/index";

export const isAuthenticated = (to, from, next) => {
    if (store.state.auth.isAuthenticated) next();
    else next("/login");
};

export const isGuest = (to, from, next) => {
    if (!store.state.auth.isAuthenticated) next();
    else next("/");
};
