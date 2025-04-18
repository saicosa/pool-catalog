<template>
  <div>
    <v-table>
      <thead>
      <tr>
        <th>Товар</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Сумма</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cart.items" :key="item.id">
        <td>
          <div class="d-flex align-center">
            <v-img
                :src="item.image || '/images/placeholder.png'"
                width="60"
                height="60"
                class="mr-4"
            ></v-img>
            {{ item.title }}
          </div>
        </td>
        <td>{{ formatPrice(item.price) }}</td>
        <td>
          <div class="d-flex align-center">
            <v-btn
                icon
                variant="text"
                @click="cart.decreaseQuantity(item.id)"
                :disabled="item.quantity <= 1"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span class="mx-2">{{ item.quantity }}</span>
            <v-btn
                icon
                variant="text"
                @click="cart.increaseQuantity(item.id)"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </td>
        <td>{{ formatPrice(item.price * item.quantity) }}</td>
        <td>
          <v-btn
              icon
              color="error"
              @click="cart.removeItem(item.id)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>

    <v-divider class="my-4"></v-divider>

    <div class="text-right">
      <div class="text-h5 mb-2">
        Итого: {{ formatPrice(cart.totalSum) }}
      </div>
      <v-btn
          color="primary"
          size="large"
          @click="checkout"
      >
        Оформить заказ
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price)
}

const checkout = () => {
  alert(`Заказ оформлен! Сумма: ${formatPrice(cart.totalSum)}`)
  cart.clearCart()
}
</script>

<style scoped src="./css/style.css"></style>