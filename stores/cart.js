import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),

    actions: {
        addItem(product) {
            const existingItem = this.items.find(item => item.id === product.id)
            existingItem
                ? existingItem.quantity++
                : this.items.push({ ...product, quantity: 1 })
        },

        increaseQuantity(id) {
            const item = this.items.find(item => item.id === id)
            if (item) item.quantity++
        },

        decreaseQuantity(id) {
            const item = this.items.find(item => item.id === id)
            if (item && item.quantity > 1) item.quantity--
        },

        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
        },

        clearCart() {
            this.items = []
        }
    },

    getters: {
        totalSum() {
            return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        }
    }
})