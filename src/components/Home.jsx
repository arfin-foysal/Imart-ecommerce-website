import React from 'react'
import { useContext } from 'react'
import { ContextData } from '../Context/GlobalData'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import "./Style.css"

const Home = () => {
    const {state:{products},productState:{sort, byStock, byFastDelivery, byRating, searchQuery}} = useContext(ContextData)
    const transformProducts = () => {
        let sortedProducts = products; 
    
        if (sort) {
          sortedProducts = sortedProducts.sort((a, b) =>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
          );
        }
    
        if (!byStock) {
          sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
    
        if (byFastDelivery) {
          sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }
    
        if (byRating) {
          sortedProducts = sortedProducts.filter(
            (prod) => prod.ratings >= byRating
          );
        }
    
        if (searchQuery) {
          sortedProducts = sortedProducts.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery)
          );
        }
    
        return sortedProducts;
      };
    // }
    return (
        <div className='home'>
           <Filters/>
          <div className="productContainer">
              {transformProducts().map(prod=><SingleProduct prod={prod} key={prod.id}/>) 
              }
          </div>
        </div>
    )
}

export default Home
