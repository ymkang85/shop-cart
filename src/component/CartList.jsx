import React from 'react'
import { Button } from 'react-bootstrap';

const CartList = ({ addToCart, setAddToCart, setIsInCart }) => {
    const deleteCart = id => {
        if (addToCart.length === 0 ) {            
            setIsInCart(false);
        }
        console.log(addToCart.length);
        setAddToCart(addToCart.filter(data => data.id !== id));
    }
    return (
        <div className="cart-list">
            {addToCart.map((item,index) => (
                <div key={index} className='product thumbnail'>
                    <img src={item.image} alt={item.name} />
                    <h6 className='product_title'>{item.name}</h6>
                    <div className="product_price">
                        <span>{item.price}</span>
                        <Button variant='danger' className='button' onClick={() => deleteCart(item.id)} >Delete</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartList