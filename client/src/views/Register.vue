<template>
    <div class="register-page d-flex flex-column">
        <div class="header d-flex flex-column">
            <h1 class="my-auto">Register</h1>
        </div>
        <div class="register-content d-flex flex-column">
            <form @submit.prevent="register" class="d-flex flex-column">
                <input
                    v-model="name"
                    type="text"
                    placeholder="Nome"
                />
                <input
                    v-model="email"
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    v-model="password"
                    type="password"
                    placeholder="Senha"
                />
                <input
                    v-model="checkpassword"
                    type="password"
                    placeholder="Confirme a senha"
                />
                <button type="submit" class="btn">
                    CADASTRAR
                </button>
            </form>
        </div>
        <span class="mb-3"
            >Já possui uma conta? Entre
            <router-link to="/login">aqui</router-link>
        </span>
    </div>
</template>

<script>
import {http} from '../config/http-common'
export default {
    data(){
        return {
            name: "",
            email: "",
            password: "",
            checkpassword:""
        }
    },
    methods:{
        async register(){
            await http.post("user", {
                name: this.name,
                email: this.email,
                password: this.password,
                checkpassword: this.checkpassword
            }).then( res =>{
                console.log(res.data);
                this.$router.push("/login");
            }).catch(err =>{
                console.log(err?.response?.data);
            })
        }
    }
};
</script>

<style>
.register-page {
    margin: 3rem auto;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem;
    overflow: hidden;
    width: 60%;
    min-width: 320px;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    background: rgba(255, 255, 255, 0.6);
}

.register-page .header {
    background-color: rgb(255, 189, 45);
    margin-bottom: 2rem;
    height: 4.5rem;
}

.register-page input {
    width: 60%;
    margin: 1rem auto;
    min-width: 300px;
    border: none;
    border-bottom: 1px solid black;
    padding-left: 0.5rem;
    height: 3rem;
    font-size: 1.2rem;
    transition: all 0.5s ease-out;
    background: transparent;
}

.register-page input:focus {
    outline: none;
    border-bottom: 1px solid rgb(255, 189, 45);
}

.register-page input:focus::placeholder {
    color: rgb(255, 189, 45);
}

.register-page .btn {
    margin: 2rem auto;
    background: rgb(255, 189, 45);
    width: 8rem;
    height: 3rem;
    font-weight: 500;
}

.register-page .btn:hover {
    background: rgb(212, 145, 0);
    transition: all 0.2s ease-out;
}

.register-page span a {
    color: rgb(255, 189, 45);
}

@media (max-width: 768px) {
    .register-page {
        width: 90%;
    }
}
</style>
