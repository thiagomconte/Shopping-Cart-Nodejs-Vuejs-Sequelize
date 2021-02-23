<template>
  <div class="home-page ">
      <div class="itens ">
          <div v-for="product in products" :key="product.id" class="iten mx-auto">
              <img :src="product.photo" alt="product photo">
              <span class="name">{{product.name}}</span>
              <span class="price">R$ {{product.price}}</span>
              <router-link :to="{path:'/product', query:{slug: product.slug}}" class="btn btn-warning">VER PRODUTO</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import {http} from	'../config/http-common'
export default {
    data(){
        return {
            products: [{}]
        }
    },
    async created(){
        await http.get("product").then(res => {
            this.products = res.data;
        }).catch(err => {
            console.log(err?.response?.data);
        })
    }
}
</script>

<style>
.itens{
    display: flex;
    flex-wrap: wrap;
}

.itens .btn{
    margin-top: auto;
}

.iten{
    display: flex;
    flex-direction:column;
    width: 250px;
    height: 380px;
    margin: 1rem 1rem;
}

.iten .name{
    font-weight: bold;
}

.iten .price{
    color: rgba(0, 0, 0, 0.4);
}

.iten img{
    height: 220px;
    object-fit: cover;
}

</style>