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
        return {
            product,
            url,
            description,
            image,
            inStock,
            inventory,
            sale,
            details
        }
    }
}).mount('#app')