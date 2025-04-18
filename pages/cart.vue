<template>
  <v-container>
    <CartEmptyState v-if="cart.items.length === 0" />
    <CartFullState v-else />
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import CartEmptyState from '@/components/cart/emptyState.vue'
import CartFullState from '@/components/cart/fullState.vue'

const cart = useCartStore()
</script>