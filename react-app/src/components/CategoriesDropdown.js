import React from "react";
import { Link } from "react-router-dom";

const CategoriesDropdown = ({ setRenderCategoriesDropdown, categoryEntries }) => {

    const handleClick = () => {
        setRenderCategoriesDropdown(false);
    }

    return ( categoryEntries &&
        <div className='dropdown'>
            <i onClick={handleClick} className="fas fa-times fa-2x"></i>
            <h2>categories</h2>
            {categoryEntries.map(category=>
                <Link key={category[0]} to={`/categories/${category[0]}`} onClick={handleClick}>{category[1]}
                </Link>
            )}
        </div>
    )
}

export default CategoriesDropdown;
