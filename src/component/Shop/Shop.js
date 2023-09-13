import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleAddToCard = (product) => {
        console.log(product);
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-comtainer'>
            <div className='product-container'>
                {/* <h2>This is for Product {products.length}</h2> */}
                {
                    products.map(product=> <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    >
                        
                        </Product>)
                }
            </div>

            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Items: { cart.length }</p>
            </div>
        </div>
    );
};

export default Shop;