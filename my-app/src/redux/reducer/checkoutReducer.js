

export const checkoutreducer = (state = [], actions) => {
    switch (actions.type) {
        case 'setProductsToCartReducer':
                console.log(actions.data)
        
           
    
                state = actions.data.products
            

            return state
        case 'addToCartReducer':
            //console.warn('reducer',actions)
            console.log("cart quantyiy", state)
            console.log("addToCartReducer", actions.data.data.products)
        
           state = actions.data.data.products
            
            return  state 

        //console.log("last reducer cart",state)


        case 'removeFromCartReducer':
            // var index= state.indexOf(actions.data.delete)
            console.log('remove from cart reducer', actions.data)
            state = actions.data.products
            return state

        case 'resetCart':

            state = []
            return state


        default:
            return state
    }
}
