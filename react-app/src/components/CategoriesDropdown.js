import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoriesDropdown = ({ setRenderCategoriesDropdown, categoryEntries }) => {
    // const categoryEntries = Object.entries(useSelector(state => state.labels.categories))


    // const labels = useSelector(state => state.labels);

    // const categoriesArr =labels?.categories;
    // const categoryEntries = Object.entries(categoriesArr);

    return ( categoryEntries &&
        <div className='nav-drop-down'>
            <h2>categories</h2>
            {categoryEntries.map(category=>
                <Link key={category[0]} to={`/categories/${category[0]}`}>{category[1]}
                </Link>
            )}
        </div>
    )
}

export default CategoriesDropdown;
