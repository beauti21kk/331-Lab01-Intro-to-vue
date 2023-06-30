const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const description = ref('This product has many colors.')
        return {
            product,
            description,
            image
        }
    }
}).mount('#app')