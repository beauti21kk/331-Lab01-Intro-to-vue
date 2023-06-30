const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const url = ref('https://www.camt.cmu.ac.th')
        const description = ref('This product has many colors.')
        const inStock = ref(true)
        const inventory = ref(100)
        return {
            product,
            url,
            description,
            image,
            inStock,
            inventory
        }
    }
}).mount('#app')