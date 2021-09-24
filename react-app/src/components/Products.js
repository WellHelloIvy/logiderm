import React from "react";
import { useSelector } from "react-redux";

const Products = ({ categoryId }) => {
    const products = Object.values(useSelector(state => state.products)).filter(product.categoryId === categoryId)

    return(
        <div>
            {products.map(product =>
                <div key={product.id}>
                    <p>{product.brand}</p>
                    <p>{product.name}</p>
                    <p>{price}</p>
                </div>
            )}
        </div>
    )
}

export default Products;
