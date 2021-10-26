import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


const SearchResults = () => {
    const [brandFilter, setBrandFilter] = useState([]);
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get('q')

    const products = Object.values(useSelector(state => state.products))



    const productResults = products?.filter(product => product.name.toLowerCase().includes(searchQuery?.toLowerCase()));

    const [filteredResults, setFilteredResults] = useState([...productResults]);

    useEffect(() => {
        if (brandFilter.length) {
            setFilteredResults(productResults.filter(product => brandFilter.includes(product.brand.toLowerCase())))
        } else {
            setFilteredResults([...productResults])
        }
    }, [brandFilter])


    const handleBrandClick = (e) => {
        const brandFilterCopy = [...brandFilter]
        if (brandFilterCopy.includes(e.target.id.toLowerCase())) {
            const indexOfBrand = brandFilterCopy.indexOf(e.target.id.toLowerCase());
            brandFilterCopy.splice(indexOfBrand, 1);
        } else {
            brandFilterCopy.push(e.target.id.toLowerCase())
        }
        setBrandFilter(brandFilterCopy);


    }

    const brandNames = new Set(productResults.map(product => product.brand))
    const brandNamesArr = [...brandNames]

    return (
        <>
            <div>
                <b>Categories</b>

                {brandNamesArr.map(brand =>
                    <>
                        <input onClick={handleBrandClick} type='checkbox' id={brand} name={`${brand}`} ></input>
                        <label for={`${brand}`}>{`${brand}`}</label>
                    </>
                )}
            </div>

            <h2>Products that match your search:</h2>
            <div className='results'>
                {filteredResults.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`}>{`${product.brand} ${product.name}`}</Link>
                )}
            </div>
        </>
    )
}

export default SearchResults;
