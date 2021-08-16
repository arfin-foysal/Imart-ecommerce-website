import React, { useReducer } from 'react'
import faker from "faker";
import AppReducer from './AppReducer';
export const ContextData = React.createContext()
faker.seed(99)
const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
const initialState={
    products:products,
    cart:[]
}
const GlobalData = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
   

    return (
        <ContextData.Provider value={{state, dispatch}}>
           {children}
        </ContextData.Provider>
        
    )
}

export default GlobalData


