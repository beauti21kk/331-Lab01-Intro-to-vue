const productDisplay = {

    template:
        `
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img' : !inStock}">
                </div>
            </div>
            <div class="product-info">
                <a :href="url"><h1>{{title}}</h1></a>
                <h2>{{description}}</h2>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
                <p v-else>Out of Stock</p>
                <p v-if="sale">On Sale</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <p>Detail:</p>
                    <li v-for="detail in details">{{detail}}</li>
                    <p>Size:</p>
                    <li v-for="size in sizes">{{size}}</li>
                </ul>
                <div v-for="(variant,index) in variants" :key="variant.id"@mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">

            </div>
            <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="removeCart">Remove</button>
            <button class="button" @click="toggle">Toggle</button>
            </div>
            <review-list :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>
    `,
    props:{
        premium: Boolean
    },
    setup(props, {emit}) {
        const shipping = computed(()=>{
            if (props.premium){
                return 'Free'
            }
            else {
                return 30
            }
        })
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('This product has many colors.')
        const url = ref('https://www.camt.cmu.ac.th')
        const sale = ref(true)
        // const image = ref('./assets/images/socks_green.jpg')
        // const inStock = ref(true)
        // const inventory = ref(100)
        const inventory = computed(() =>{
            return variants.value[selectedVariant.value].quantity
         })
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 30},
        ])
        const selectedVariant = ref(0)
        const cart = ref(0)
        function updateVariant(index) {
            selectedVariant.value = index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const sizes = ref([
            'S', 'M', 'L'
        ])
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const reviews = ref([])
        function addReview(review){
            reviews.value.push(review)
        }
        function addToCart() {
            emit('add-to-cart', variants.value[selectedVariant.value].id)
        }
        function removeCart(){
            emit('remove-from-cart', variants.value[selectedVariant.value].id)
        }
        const title =computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function toggle(){
            if(inStock.value === false) {
                variants.value[selectedVariant.value].quantity = 100
            
            }
            else{
                variants.value[selectedVariant.value].quantity = 0
            }
        }
        return {
            title,
            image,
            description,
            url,
            inStock,
            inventory,
            details,
            variants,
            addToCart,
            removeCart,
            updateImage,
            updateVariant,
            shipping,
            reviews,
            addReview,
            sizes,
            toggle,
            cart,
            sale
        }
    }
}