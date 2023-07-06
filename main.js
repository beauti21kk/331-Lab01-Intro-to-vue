const { createApp, ref, computed} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        //const image = ref('./assets/images/socks_green.jpg')
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const url = ref('https://www.camt.cmu.ac.th')
        const description = ref('This product has many colors.')
        //const inStock = ref(false)
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const inventory = ref(20)
        const sale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S', 'M', 'L'
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value +=1
        }
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage){
            image.value = variantImage
        }
        function toggle(){
            inStock.value = !inStock.value
        }
        function updateVariant(index){
            selectedVariant.value = index;
        }
        return {
            product,
            url,
            brand,
            title,
            description,
            image,
            inStock,
            inventory,
            sale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggle
        }
    }
}).mount('#app')