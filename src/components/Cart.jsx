import React, { useContext } from 'react'
import { ContextData } from '../Context/GlobalData'

const Cart = () => {
    const {state:{cart},dispatch}= useContext(ContextData)
    return (
        <div className="home">
            dcs
        </div>
    )
}

export default Cart
