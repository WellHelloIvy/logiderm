import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = ({ categoryId }) => {
    const products = Object.values(useSelector(state => state.products)).filter(product => product.categoryId === +categoryId)

    return (
        <div>
            {products.map(product =>
                <div key={product.id} className='results'>
                    <Link to={`/products/${product.id}`}>{`${product.brand} ${product.name}`}</Link>
                </div>
            )}
            <img src='https://i.imgur.com/bUgWqOl.png'/>
            <img src='https://i.imgur.com/az9wy8s.png'/>
            <img src='https://i.imgur.com/X60imMo.png'/>
            <img src='https://i.imgur.com/e4z4ku7.png'/>
            <img src='https://i.imgur.com/nYq8YzU.png'/>
        </div>
    )
}

export default Products;

