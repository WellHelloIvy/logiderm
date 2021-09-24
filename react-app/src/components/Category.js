import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Products from './Products';

function Category() {
    let { categoryId } = useParams();
    const categoryEntry = useSelector(state => state.labels.categories[+categoryId])


    return( categoryEntry &&
        <div>
            <h1>{categoryEntry[1]}</h1>
            <Products categoryId={categoryId}></Products>
        </div>
    )
}

export default Category
