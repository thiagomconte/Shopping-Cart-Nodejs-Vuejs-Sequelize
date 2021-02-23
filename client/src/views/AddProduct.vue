<template>
    <div class="product-form">
        <router-link to="/"><i v-b-tooltip.hover title="Voltar" class="fas fa-arrow-left"></i></router-link>
        <form @submit.prevent="addProduct" class="col-md-8">
            <h1>Adicione um Produto</h1>
            <hr />
            <input
                class="mt-4"
                type="text"
                v-model="name"
                placeholder="Nome do produto"
            />
            <textarea
                type="text"
                v-model="description"
                placeholder="Descrição do produto"
            />
            <span class="mr-auto"
                >R$<input type="number" v-model="price" placeholder="Preço"
            /></span>

            <input type="text" v-model="photo" placeholder="Foto" />
            <button type="submit" class="btn">ADICIONAR PRODUTO</button>
        </form>
    </div>
</template>

<script>
import { http } from "../config/http-common";
export default {
    data() {
        return {
            name: "",
            description: "",
            price: 0,
            photo: "",
        };
    },
    methods: {
        async addProduct() {
            await http.post("product", {
                name: this.name,
                description: this.description,
                price: this.price,
                photo: this.photo,
            })
                .then((res) => {
                    this.$router.push("/");
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err?.response?.data);
                });
        },
    },
};
</script>

<style scoped>
.product-form form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 0.3rem;
    margin: 2rem auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align: center;
}

.product-form form input, textarea {
    margin: 1.5rem 0;
    height: 2.5rem;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    transition: 0.3s;
    padding-left: 1rem;
}

.product-form textarea{
    height: 10rem;
}

.product-form form input:focus, textarea:focus {
    outline: none;
    border-bottom: 1px solid #f0ad4e;
}

.product-form span {
    font-size: 1.2rem;
}

.product-form button {
    margin: 2rem 0;
    border: 1px solid #f0ad4e;
    border-radius: 5rem;
    transition: 0.5s;
    font-weight: 500;
}

.product-form button:hover {
    background: #f0ad4e;
    color: white;
}

.product-form i{
    font-size:2rem;
    position: absolute;
    color: black;
}
</style>