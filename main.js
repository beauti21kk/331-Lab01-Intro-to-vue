const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true) // If change 'false', shipping is 30 (not free)
        function updateCart(id) {
            cart.value.push(id)
        }
        return {
            cart,
            premium,
            updateCart
        }
    }
})

app.component('product-display', productDisplay)
app.mount('#app')