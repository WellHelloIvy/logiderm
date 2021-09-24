import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const CategoriesDropdown = ({ setRenderCategoriesDropdown }) => {
    const categoryNames = Object.entries(useSelector(state => state.labels.categories))

    return (

        <div>
            <h2>categories</h2>
            {categoryNames.map(category=>
                // <Link key={category[i]}>{category[i]}</Link>
                <p key={category}>{category}</p>
            )}
        </div>


    )
}

export default CategoriesDropdown;
