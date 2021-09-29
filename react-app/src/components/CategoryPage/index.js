import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Products from '../Products';
import './CategoryPage.css'

function Category() {
    let { categoryId } = useParams();

    const labels = useSelector(state => state.labels)
    const category = labels?.categories[+categoryId]
    const allProducts = Object.entries(useSelector(state => state.products))
    let categoryProducts = allProducts.filter(product => product.categoryId === +categoryId)

    return( categoryProducts &&
        <div className='category-page-container'>
            <h1>{`${category}s`}</h1>
            <Products categoryId={categoryId} />
        </div>
    )
}

export default Category
