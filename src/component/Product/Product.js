import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"

const Product = ({product,handleAddToCard}) => {

    const { name, img, seller, price, ratings } = product;
    // const { handleAddToCart } = props;
    return (
        <div className='product'>
            <h2>This is product</h2>
            <img src={img} alt="product identity"></img>

            <div className='product-info'>
                <p className='product-name'>{name}</p>

                <p style={{ fontWeight: 'bold' }}>Price:${price}</p>

                <p>Manufacturer: {seller}</p>

                <p>Rating: {ratings}</p>

            </div> 
            <button onClick={() => handleAddToCard(product)} className='btn-cart'>
                <p className='cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;