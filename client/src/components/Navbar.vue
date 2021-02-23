<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link class="navbar-brand" to="/">Shopp App</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto px-2">
        <router-link v-if="$store.state.auth.isAuthenticated" class="nav-link" to="/addProduct">Adicione um produto</router-link>
        <router-link v-if="!$store.state.auth.isAuthenticated" class="nav-link" to="/login">Login</router-link>
        <router-link v-if="!$store.state.auth.isAuthenticated" class="nav-link" to="/register">Registrar</router-link>
        <span v-if="$store.state.auth.isAuthenticated" class="nav-link" @click="logOut">Sair</span>
        <router-link v-if="$store.state.auth.isAuthenticated" to="/cart" class="nav-link nav-cart">
          <b-badge class="badge" variant="light">{{cartLength}}</b-badge>
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  methods:{
    logOut(){
      this.$store.dispatch('product/removeAllProducts');
      this.$store.dispatch('auth/logOut');
      this.$router.push("/");
    }
  },
  computed: {
    cartLength(){
      return this.$store.getters['product/cartLength']
    }
  }
}
</script>

<style>
.nav-cart{
  display:block;
  color: white;
  margin: auto;
}

.nav-cart i{
  font-size: 1.8rem;
}

.nav-cart .badge{
  position: absolute;
  top: 10px;
  color: white;
  background-color: red;
}

.nav-link{
  cursor: pointer;
}
</style>