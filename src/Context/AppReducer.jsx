export const AppReducer = (state,action) => {
       switch (action.type) {
           case "ADD_TO_CART":
               return{
                   ...state,cart:[...state.cart,{...action.payload,qty:1}]
               }
               
           case "REMOVE_CART":
               return{
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
               }
           case "CHANGE_CART_QTY":
               return{
                ...state,
                cart: state.cart.filter((c) => c.id === action.payload.id ?(c.qty=action.payload.qty):c.qty),
               }
       
           default:
               return state
       }



}



export const productReducer=(state,action)=>{
    switch (action.type) {
        case "SORT_BY_PRICE":
            return{...state,sort:action.payload}

        case "FILTER_BY_STOCK":
            return{...state,bystock:!state.bystock} 

        case "FILTER_BY_DELEVERY":
            return{...state,byFastDelevery:!state.byFastDelevery} 

        case "FILTER_BY_REATING":
            return{...state,byRating:action.payload} 

        case "FILTER_BY_SEARCH":
            return{...state,searchQuery: action.payload}

        case "CLEAR_FILTERS":
            return{
                byStack:false,
                byFastDelevery:false,
                byRating:0,
                searchQuery:"",
            }
    
        default:
            return state
    }
}

