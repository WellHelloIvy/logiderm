import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoriesDropdown = ({ setRenderCategoriesDropdown }) => {
    const categoryEntries = Object.entries(useSelector(state => state.labels.categories))

    return (
        <div className='nav-drop-down'>
            <h2>categories</h2>
            {categoryEntries.map(categoryEntry=>
                <Link key={categoryEntry[0]} to={`/categories/${categoryEntry[0]}`}>{categoryEntry[1]}
                </Link>
            )}
        </div>
    )
}

export default CategoriesDropdown;
