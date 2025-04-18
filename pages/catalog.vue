<!-- pages/catalog.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="product in products" :key="product.id">
        <v-card>
          <v-img :src="product.image" height="200px" contain></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>{{ product.description }}</v-card-subtitle>
          <v-card-text class="text-h6">
            {{ product.price.toLocaleString() }} ₽
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="cart.addItem(product)">
              Добавить в корзину
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Импортируем JSON
import products from '@/data/products.json'

const cart = useCartStore()
</script>