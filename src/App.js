import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductList from './component/ProductList'
import CartList from './component/CartList'
import { FcPaid } from "react-icons/fc";

const App = () => {
  const [isInCart, setIsInCart] = useState(false);
  const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      <Container>
        <header>
          <h1>LOGO</h1>
          <div className='cartbox'>
            {
              addToCart && <FcPaid className='cart' />
            }
            <span>{addToCart.length}</span>
          </div>
        </header>
        <Row className='my-5'>
          <Col xs={12}>
            <h1 className='tesxt-center'>My SHOPPING CART</h1>
          </Col>
        </Row>
        <Row>
          <Col md={isInCart ? 9 : 12}>
            <ProductList
              setIsInCart={setIsInCart}
              addToCart={addToCart}
              setAddToCart={setAddToCart}
            />
          </Col>
          {
            isInCart && <Col md={3}><CartList addToCart={addToCart} setAddToCart={setAddToCart}  setIsInCart={setIsInCart} /></Col>
          }
        </Row>
      </Container>
      <footer className='mt-5 py-3 pb-2 border-top text-white' style={{ backgroundColor: "var(--bs-gray-700" }}>
        <p className='text-center'>My React Shop Cart</p>
      </footer>
    </>
  )
}

export default App