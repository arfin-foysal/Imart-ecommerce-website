const AppReducer = (state,action) => {
       switch (action.type) {
           case "ADD_TO_CART":
               return{
                   ...state,cart:[...state.cart,{...action.payload,qyt:1}]
               }
           case "REMOVE_CART":
               return{
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
               }
       
           default:
               return state
       }
}

export default AppReducer
