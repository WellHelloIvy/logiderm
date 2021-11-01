import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './SearchResults.css'


const SearchResults = () => {
    const [brandFilter, setBrandFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200);
    const [showFilters, setShowFilters] = useState(true);
    const [toggleShowButton, setToggleShowButton] = useState('hide')
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get('q')

    const products = Object.values(useSelector(state => state.products))
    const categoriesObj = useSelector(state => state.labels.categories)


    let productResults = products?.filter(product => {
        let brandName = `${product.brand} ${product.name}`;
        return brandName.toLowerCase().includes(searchQuery?.toLowerCase())
    });

    const [filteredResults, setFilteredResults] = useState([...productResults]);

    const findCommonElements = (arr1, arr2) => {
        return arr1.filter(ele => arr2.includes(ele))
    }



    useEffect(() => {
        productResults = products?.filter(product => {
            let brandName = `${product.brand} ${product.name}`;
            return brandName.toLowerCase().includes(searchQuery?.toLowerCase())
        });

        let brandResults = [...productResults];
        let categoryResults = [...productResults];
        let priceResults = [...productResults];

        if (brandFilter.length) {
            brandResults = (productResults.filter(product => brandFilter.includes(product.brand.toLowerCase())))
        }

        if (categoryFilter.length) {
            categoryResults = (productResults.filter(product => categoryFilter.includes(product.categoryId)))
        }

        priceResults = (productResults.filter(product => product.price / 100 <= maxPrice && product.price / 100 >= minPrice))

        let filtered = findCommonElements(brandResults, categoryResults)
        filtered = findCommonElements(filtered, priceResults)

        setFilteredResults([...filtered])

    }, [brandFilter, categoryFilter, minPrice, maxPrice, searchQuery])


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
        const clicked = e.target.classList.contains('isClicked')

        if (!clicked) {
            e.target.classList.add('isClicked')
        } else {
            e.target.classList.remove('isClicked')
        }

        if (categoryFilterCopy.includes(+e.target.id)) {
            const indexOfCategoryId = categoryFilterCopy.indexOf(+e.target.id);
            categoryFilterCopy.splice(indexOfCategoryId, 1);
        } else {
            categoryFilterCopy.push(+e.target.id)
        }
        setCategoryFilter(categoryFilterCopy);
    }

    useEffect(() => {
        let filler = document.querySelector('.filler-color-div');
        filler.style.setProperty('width', `${(maxPrice - minPrice) / 200 * 100}%`)
        filler.style.setProperty('margin-left', `${(minPrice) / 200 * 100}%`)
    }, [minPrice, maxPrice])

    const handleMinChange = (e) => {
        if (maxPrice - e.target.value >= 10) {
            setMinPrice(+e.target.value)
        }
    }

    const handleMaxChange = (e) => {
        if (e.target.value - minPrice >= 10) {
            setMaxPrice(+e.target.value)
        }
    }

    const brandNames = new Set(productResults.map(product => product.brand.toUpperCase()))
    const brandNamesArr = [...brandNames]

    const categoryIds = new Set(productResults.map(product => product.categoryId))
    const categoryIdsArr = [...categoryIds]

    const handleButtonClick = () => {
        if (showFilters === true) {
            setShowFilters(false)
            setToggleShowButton('show')
        } else {
            setShowFilters(true)
            setToggleShowButton('hide')
        }
    }

    return (
        <>
            <button onClick={handleButtonClick}>{`${toggleShowButton} filters`}</button>
            {showFilters &&
                <div className='filters-container'>
                    <div>
                        <div>
                            <b>Brands</b>
                        </div>
                        <div className='brands-div'>
                            {brandNamesArr.sort().map(brand =>
                                <div>
                                    <input onClick={handleBrandClick} type='checkbox' id={brand} name={`${brand}`} ></input>
                                    <label for={`${brand}`}>{`${brand}`}</label>
                                </div>
                            )}
                        </div>

                    </div>
                    <div>
                        <div>
                            <b>Categories</b>
                        </div>
                        <div className='categories-div'>
                            {categoryIdsArr.map(id =>
                                <div>
                                    <button id={id} onClick={handleCategoryClick}>{categoriesObj[+id]}</button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className='price-filter-div'>
                        <b>Price</b>
                        <div className="slider-container">
                            <div className='filler-color-div'></div>
                            <div id='price-slider-label' >
                                <span>{`Min price: $${minPrice}`}</span>
                                <span>{`Max price: $${maxPrice}`}</span>
                            </div>

                            <input id='min' type='range' min='0' max='200' value={minPrice} onChange={handleMinChange}></input>
                            <input id='max' type='range' min='0' max='200' value={maxPrice} onChange={handleMaxChange}></input>
                        </div>
                    </div>
                </div>
            }



            <h2>Products that match your search:</h2>
            <div className='results'>
                {filteredResults.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`}>{`${product.brand} ${product.name} $${product.price / 100}`}</Link>
                )}
            </div>
        </>
    )
}

export default SearchResults;
