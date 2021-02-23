<template>
    <div class="cart-page mt-4">
        <div v-for="product in cart" :key="product.id" class="row">
            <div class="col-sm-3">
                <img :src="product.photo" />
                <i @click="removeProduct(product.id)" class="fas fa-minus-circle"></i>
            </div>
            <div class="col-sm-9 description">
                <h3>{{ product.name }}</h3>
                <span>R$ {{ product.price }}</span>
            </div>
            <hr class="mt-2" />
        </div>
        <div class="total">
            <h1>Total:</h1>
            <span>R$ {{ totalPrice }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: [],
        };
    },
    created() {
        this.cart = this.$store.state.product.cart;
    },
    methods: {
        removeProduct(id){
            this.$store.dispatch("product/removeProduct", id);
        }
    },
    computed: {
        totalPrice() {
            return this.$store.getters["product/totalPrice"];
        },
    },
};
</script>

<style>
.cart-page img {
    width: 80px;
    height: 100px;
    object-fit: cover;
}

.cart-page .description h3 {
    margin-right: auto;
}

.cart-page .description span {
    float: right;
    font-size: 1.3rem;
}

.cart-page .total {
    display: flex;
}

.cart-page .total span {
    margin-left: auto;
    font-size: 1.5rem;
}

.cart-page .col-sm-3 i {
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
}
</style>