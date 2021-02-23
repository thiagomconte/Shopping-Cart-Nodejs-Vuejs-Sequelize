<template>
    <div class="product-page mt-3">
        <div class="row mx-auto mt-3">
            <div class="col-lg-3">
                <img :src="product.photo" alt="product image" />
            </div>
            <div class="col-lg-9 iten-data">
                <h1>{{ product.name }}</h1>
                <span class="description mt-2">{{ product.description }}</span>
                <span>{{ formatDate(product.createdAt) }}</span>
                <span class="price mt-2">R$ {{ product.price }}</span>
                <button v-if="$store.state.auth.isAuthenticated" class="btn btn-warning" @click="addProductToCart">
                    Adicionar ao carrinho
                </button>
                <router-link to="/login" v-else class="btn btn-warning">
                    Adicionar ao carrinho
                </router-link>
            </div>
        </div>
        <hr />
        <Comments :comments="product.Comments" />
    </div>
</template>

<script>
import { http } from "../config/http-common";
import Comments from "../components/Comments";
import moment from "moment";
export default {
    components: {
        Comments,
    },
    data() {
        return {
            product: {},
        };
    },
    async created() {
        await http
            .get(`product/${this.$route.query.slug}`)
            .then((res) => {
                console.log(res.data);
                this.product = res.data;
            })
            .catch((err) => {
                console.error(err?.response?.data);
            });
    },
    methods: {
        formatDate(data) {
            return moment(data).startOf("hour").fromNow();
        },
        addProductToCart() {
            this.$store.dispatch("product/addProduct", {
                name: this.product.name,
                price: this.product.price,
                photo: this.product.photo,
                slug: this.product.slug,
            });
        },
    },
};
</script>

<style>
.iten-data {
    display: flex;
    flex-direction: column;
}

.product-page .row {
    margin: 3rem auto;
}

.product-page img {
    width: 100%;
    height: 280px;
    object-fit: cover;
}

.product-page .description,
.price {
    font-size: 1.4rem;
}

.product-page .price {
    color: rgba(0, 0, 0, 0.5);
}

.product-page .btn {
    width: 15rem;
    margin-top: auto;
    margin-left: auto;
}
</style>