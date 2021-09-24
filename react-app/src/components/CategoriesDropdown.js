import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const CategoriesDropdown = ({ setRenderCategoriesDropdown }) => {
    const categoryNames = Object.values(useSelector(state => state.labels.categories))

    document.querySelector('html').addEventListener('click', () => {
        setRenderCategoriesDropdown(false)
    });

    return (
        <>
            <div>
                <div>
                    <h2>categories</h2>
                    {categoryNames.map(category=>
                        // <Link key={category[i]}>{category[i]}</Link>
                        <p>{category}</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default CategoriesDropdown;
