const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true) // If change 'false', shipping is 30 (not free)
        return {
            cart,
            premium
        }
    }
})

app.component('product-display', productDisplay)
app.mount('#app')