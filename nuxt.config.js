export default defineNuxtConfig({
    ssr: false,
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.min.css',
    ],

    build: {
        transpile: ['vuetify'],
    },

    modules: ['@pinia/nuxt'],

    pinia: {
        autoImports: ['defineStore']
    },

    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        resolve: {
            alias: {
                'pinia/dist/pinia.mjs': 'pinia/dist/pinia.mjs'
            }
        }
    },
    app: {
        baseURL: '/pool-catalog/'
    },

    compatibilityDate: '2025-04-18'
})
