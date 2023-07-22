const { createApp, ref, computed, reactive, toRefs} = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(false) // If change 'false', shipping is 30 (not free)
        function updateCart(id) {
            cart.value.push(id)
        }
        function removeCart(id){
            const index = cart.value.indexOf(id);
            if (index !== -1) {
                cart.value.splice(index, 1);
            }
        }
        
        return {
            cart,
            premium,
            updateCart,
            removeCart,
            cartDisplay: computed(() =>
                    cart.value.reduce((acc, curr) => {
                        if (acc[curr]) {
                             acc[curr]++;
                        } else {
                            acc[curr] = 1;
                    }
                return acc;
            }, {})
      ),

    }
    }
})

app.component('product-display', productDisplay)
app.component('product-detail', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)
app.mount('#app')