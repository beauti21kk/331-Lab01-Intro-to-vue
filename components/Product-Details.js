const productDetails = {
 
    template:
        `
        <ul>
        <li v-for="detail in details">{{detail}}</li>
        </ul>
    `,props :{
        premium: Array
    },
    setup(props){
        const detail = ref(props.detail)
        return{
            detail
        }
    }
}