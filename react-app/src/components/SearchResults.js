import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import SearchFilters from "./SearchFilters";

const SearchResults = () => {
    const [showFilters, setShowFilters] = useState(false)
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get('q')

    const products = Object.values(useSelector(state => state.products))

    const productResults = products?.filter(product => product.name.toLowerCase().includes(searchQuery?.toLowerCase()));

    const handleFiltersClick = () => {
        setShowFilters(true)
    }

    return (
        <>
            <button onClick={handleFiltersClick}>Show Filters</button>
            {showFilters &&
                <SearchFilters productResults={productResults}/>
            }
            <h2>Products that match your search:</h2>
            <div className='results'>
                {productResults.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`}>{`${product.brand} ${product.name}`}</Link>
                )}
            </div>
        </>
    )
}

export default SearchResults;
