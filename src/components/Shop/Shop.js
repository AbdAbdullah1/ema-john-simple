import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0,10) 

    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([]);
    const handleAddProduct = (Product) =>{
        const newCart = [...cart, Product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === Product.key)
        const count = sameProduct.length;
        addToDatabaseCart(Product.key, count)
        // addToDatabaseCart(Product.key, 1);
    }
return (
        <div className="shop-container" >
            <div className="product-container">
          
                {
                    products.map(pd => <Product
                    key ={pd.key}
                showAddToCArt ={true}
                    handleAddProduct ={handleAddProduct}
                    product={pd}> 
                    
                    </Product>)
                }
           
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;