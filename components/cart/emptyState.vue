<template>
  <div class="empty-cart">
    <v-icon size="100" color="grey-lighten-1">mdi-cart-off</v-icon>
    <h2 class="text-h4 my-4">Ваша корзина пуста</h2>
    <v-btn
        to="/"
        color="primary"
        size="large"
        prepend-icon="mdi-store"
    >
      Перейти в каталог
    </v-btn>
  </div>
</template>

<style scoped src="./css/style.css"></style>