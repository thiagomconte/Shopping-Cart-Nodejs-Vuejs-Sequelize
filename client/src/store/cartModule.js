export const cartModule = {
    namespaced: true,
    state: {
        cart: []
    },
    mutations: {
        addProduct(state, payload) {
            state.cart.push(payload)
        },
        removeProduct(state, id) {
            const index = state.cart.findIndex(obj => obj.id === id)
            if (index > -1) {
                state.cart.splice(index, 1);
            }
        },
        removeAllProducts(state){
            state.cart = [];
        }
    },
    actions: {
        addProduct({ commit }, payload) {
            commit("addProduct", payload);
        },
        removeProduct({ commit }, id) {
            commit("removeProduct", id);
        },
        removeAllProducts({ commit}){
            commit("removeAllProducts");
        }
    },
    getters: {
        cartLength: state => {
            return state.cart.length;
        },
        totalPrice: state => {
            var total = 0
            state.cart.forEach(product => total += product.price);
            return total;
        }
    }
};
