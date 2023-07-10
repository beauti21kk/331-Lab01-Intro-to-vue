const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true) // If change 'false', shipping is 30 (not free)
        function updateCart(id) {
            cart.value.push(id)
        }
        function removeCart() {
            cart.value = []
            console.log(cart.value)
        }
        return {
            cart,
            premium,
            updateCart,
            removeCart
        }
    }
})

app.component('product-display', productDisplay)
app.mount('#app')