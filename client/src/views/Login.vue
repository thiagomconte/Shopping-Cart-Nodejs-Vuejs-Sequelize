<template>
    <div class="login-page d-flex flex-column">
        <div class="header d-flex flex-column">
            <h1 class="my-auto">Login</h1>
        </div>
        <div class="login-content d-flex flex-column">
            <form @submit.prevent="login" class="d-flex flex-column">
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
                <button type="submit" class="btn">
                    ENTRAR <i class="fas fa-sign-in-alt"></i>
                </button>
            </form>
        </div>
        <span class="mb-3"
            >Ainda não possui uma conta? Cadastre-se
            <router-link to="/register">aqui</router-link>
        </span>
    </div>
</template>

<script>
import {http} from '../config/http-common'
export default {
    data(){
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async login(){
            await http.post("user/login",{
                email: this.email,
                password: this.password
            }).then( res => {
                this.$store.dispatch('auth/authenticate', {email: res.data.email, token: res.data.token}, {root: true})
                this.$router.push("/")
            }).catch( err => {
                console.log(err?.response?.data);
            })
        }
    }
};
</script>

<style>
.login-page {
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

.login-page .header {
    background-color: rgb(255, 189, 45);
    margin-bottom: 2rem;
    height: 4.5rem;
}

.login-page input {
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

.login-page input:focus {
    outline: none;
    border-bottom: 1px solid rgb(255, 189, 45);
}

.login-page input:focus::placeholder {
    color: rgb(255, 189, 45);
}

.login-page .btn {
    margin: 2rem auto;
    background: rgb(255, 189, 45);
    width: 8rem;
    height: 3rem;
    font-weight: 500;
}

.login-page .btn:hover {
    background: rgb(212, 145, 0);
    transition: all 0.2s ease-out;
}

.login-page span a {
    color: rgb(255, 189, 45);
}

@media (max-width: 768px) {
    .login-page {
        width: 90%;
    }
}
</style>
