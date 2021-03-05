import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key} >{name} </Link> </h4>
                <br />
                <p><small>by: {seller} </small></p>
                <p>${price} </p>
                <p><small>Only {stock} left in stock - Order soon </small></p>
               {props.showAddToCArt === true && <button className="main-button"
                onClick={() => props.handleAddProduct(props.product)}>add to cart</button>}
            </div>

        </div>
    );
};

export default Product;