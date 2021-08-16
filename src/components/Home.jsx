import React from 'react'
import { useContext } from 'react'
import { ContextData } from '../Context/GlobalData'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import "./Style.css"

const Home = () => {
    const {state:{products}} = useContext(ContextData)
    return (
        <div className='home'>
           <Filters/>
          <div className="productContainer">
              {
                 products.map(prod=><SingleProduct prod={prod} key={prod.id}/>) 
              }
          </div>
        </div>
    )
}

export default Home
