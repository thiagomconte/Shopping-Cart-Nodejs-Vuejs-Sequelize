import Vue from "vue";
import VueRouter from "vue-router";
import AddProduct from "../views/AddProduct.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";
import {isAuthenticated, isGuest} from './routeGuards'

Vue.use(VueRouter);

const routes = [
    {
        path: "/addProduct",
        component: AddProduct,
        beforeEnter: isAuthenticated,
    },
    { path: "/", component: Home },
    { path: "/product", component: Product },
    {
        path: "/login",
        component: Login,
        beforeEnter: isGuest,
    },
    {
        path: "/register",
        component: Register,
        beforeEnter: isGuest,
    },
    {
        path: "/cart",
        component: Cart,
        beforeEnter: isAuthenticated,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;
