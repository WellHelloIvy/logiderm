import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Search.css'

const Search = ({ searchQuery, setSearchQuery, setRenderSearchDropdown}) => {
    const products = Object.values(useSelector(state => state.products))

    const brandNameProducts = products.map(product => {
        return {
            id: product.id,
            brandName:`${product.brand} ${product.name}`
        }
    })

    let searchResults =  brandNameProducts?.filter(product => product.brandName.toLowerCase().includes(searchQuery?.toLowerCase()))

    const handleClick = () => {
        setRenderSearchDropdown(false);
        setSearchQuery('');
    }

    const matchHighlight = (searchResult) => {
        const index = searchResult.toLowerCase().indexOf(searchQuery.toLowerCase());
        const length = searchQuery.length;

        const beforeMatch = searchResult.slice(0, index);
        const matchingPortion = searchResult.slice(index, index + length)
        const afterMatch = searchResult.slice(index + length)

        return <span>{beforeMatch}<span className='searchMatch'>{matchingPortion}</span>{afterMatch}</span>
    }

    return(
        <div className='dropdown search-dropdown'>
            <i onClick={handleClick} className="fas fa-times fa-2x"></i>
            {searchResults.length ?
                searchResults.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`} onClick={handleClick}>
                    {matchHighlight(product.brandName)}
                    </Link>
                )
                :
                    <div>
                        No results matched your search.
                    </div>
            }
        </div>
    )
}

export default Search
