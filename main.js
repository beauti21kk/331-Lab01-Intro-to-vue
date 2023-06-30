const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const url = ref('https://www.camt.cmu.ac.th')
        const description = ref('This product has many colors.')
        const inStock = ref(true)
        const inventory = ref(1)
        const sale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green' },
            {id: 2235, color: 'blue' }
        ])
        const sizes = ref([
            'S', 'M', 'L'
        ])
        const cart = ref(0)
        return {
            product,
            url,
            description,
            image,
            inStock,
            inventory,
            sale,
            details,
            variants,
            sizes,
            cart
        }
    }
}).mount('#app')