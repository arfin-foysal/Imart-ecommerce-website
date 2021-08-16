import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { ContextData } from '../Context/GlobalData';
import Reating from './Reating';

const SingleProduct = ({prod}) => {
    const { state: { cart }, dispatch,} = useContext(ContextData)
    
    
    
      return (
        <div className="products">
          <Card>
            <Card.Img variant="top" src={prod.image} alt={prod.name} />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Subtitle style={{ paddingBottom: 10 }}>
                <span>$ {prod.price.split(".")[0]}</span>
                {prod.fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>4 days delivery</div>
                )}
                <Reating rating={prod.ratings} />
              </Card.Subtitle>

              

              {cart.some((p) => p.id === prod.id) ? (
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_CART",
                      payload: prod,
                    })
                  }
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  onClick={() => dispatch({ type: "ADD_TO_CART",payload: prod, })
                  }
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      );
    };


export default SingleProduct
