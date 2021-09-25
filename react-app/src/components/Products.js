import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = ({ categoryId }) => {
    const products = Object.values(useSelector(state => state.products)).filter(product => product.categoryId === +categoryId)

    return (
        <div>
            {products.map(product =>
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        {`${product.brand} ${product.name}`}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Products;

