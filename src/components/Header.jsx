import React from 'react'
import { useContext } from 'react'
import { Badge, Container, FormControl, Nav, Navbar,Dropdown, Button, } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../App.css"
import { ContextData } from '../Context/GlobalData'
import {} from 'react-icons'
  
// import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
    const {state:{cart},dispatch} = useContext(ContextData)
    return (
        <div>
           <Navbar bg="dark"  variant="dark" style={{ height:80}}>
               <Container>
                   <Navbar.Brand>
                       <Link to= "/">IMART</Link>
                   </Navbar.Brand>
                   <Navbar.Text className="search">
                       <FormControl style={{ width:500}} placeholder="Search a Product"
                       className="m-auto"/>
                   </Navbar.Text>
                   <Nav>
                       
                       <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }} onClick={() =>dispatch({type: "REMOVE_CART",payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
                       </Dropdown>
                   </Nav>
               </Container>
           </Navbar>
        </div>
    )
}

export default Header
