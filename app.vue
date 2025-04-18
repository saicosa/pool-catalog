<!-- app.vue -->
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>Каталог бассейнов</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/cart">Корзина ({{ cart.items.length }})</v-btn>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
const cart = useCartStore()
</script>