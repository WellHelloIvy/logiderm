import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


const SearchResults = () => {
    const [brandFilter, setBrandFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get('q')

    const products = Object.values(useSelector(state => state.products))
    const categoriesObj = useSelector(state => state.labels.categories)


    const productResults = products?.filter(product => product.name.toLowerCase().includes(searchQuery?.toLowerCase()));

    const [filteredResults, setFilteredResults] = useState([...productResults]);

    const findCommonElements = (arr1, arr2) => {
        return arr1.filter(ele => arr2.includes(ele))
    }

    useEffect(() => {

        let brandResults = [...productResults];
        let categoryResults = [...productResults];
        if (brandFilter.length) {
            brandResults = (productResults.filter(product => brandFilter.includes(product.brand.toLowerCase())))
        }

        if (categoryFilter.length) {
            categoryResults = (productResults.filter(product => categoryFilter.includes(product.categoryId)))
        }
        else {
            setFilteredResults([...productResults])
        }

        let filtered = findCommonElements(brandResults, categoryResults)
            if(filtered.length) {
                setFilteredResults([...filtered])
            } else {
                setFilteredResults([...productResults])
            }

    }, [brandFilter, categoryFilter])


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

    const handleCategoryClick = (e) => {
        const categoryFilterCopy = [...categoryFilter]

        if (categoryFilterCopy.includes(+e.target.id)) {
            const indexOfCategoryId = categoryFilterCopy.indexOf(+e.target.id);
            categoryFilterCopy.splice(indexOfCategoryId, 1);
        } else {
            categoryFilterCopy.push(+e.target.id)
        }
        setCategoryFilter(categoryFilterCopy);
    }



    const brandNames = new Set(productResults.map(product => product.brand))
    const brandNamesArr = [...brandNames]

    const categoryIds = new Set(productResults.map(product => product.categoryId))
    const categoryIdsArr = [...categoryIds]

    return (
        <>
            <div>
                <div>
                    <b>Brands</b>
                    {brandNamesArr.map(brand =>
                        <>
                            <input onClick={handleBrandClick} type='checkbox' id={brand} name={`${brand}`} ></input>
                            <label for={`${brand}`}>{`${brand}`}</label>
                        </>
                    )}
                </div>
                <div>
                    <b>Categories</b>
                        {categoryIdsArr.map(id =>
                            <>
                                <button id={id} onClick={handleCategoryClick}>{categoriesObj[+id]}</button>
                            </>
                        )}
                </div>
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
