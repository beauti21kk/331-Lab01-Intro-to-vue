const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const url = ref('https://www.camt.cmu.ac.th')
        const description = ref('This product has many colors.')
        return {
            product,
            url,
            description,
            image
        }
    }
}).mount('#app')