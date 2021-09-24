import React from 'react';
import { useSelector } from 'react-redux';

function Category() {
    const categories = Object.entries(useSelector(state => state.labels.categories));

    return(
        <div>
            <h1>Categories</h1>
            {
                categories.map(category =>
                    <p>{category}</p>
                    )
            }

        </div>
    )
}

export default Category
