import React from "react";
import { Link } from "react-router-dom";

const CategoriesDropdown = ({ setRenderCategoriesDropdown, categoryEntries }) => {

    return ( categoryEntries &&
        <div className='dropdown'>
            <h2>categories</h2>
            {categoryEntries.map(category=>
                <Link key={category[0]} to={`/categories/${category[0]}`}>{category[1]}
                </Link>
            )}
        </div>
    )
}

export default CategoriesDropdown;
