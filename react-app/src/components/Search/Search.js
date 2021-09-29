import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Search.css'

const Search = ({ searchQuery, setSearchQuery, setRenderSearchDropdown}) => {
    const products = Object.values(useSelector(state => state.products))

    const searchResults = products?.filter(product => product.name.toLowerCase().includes(searchQuery?.toLowerCase()))

    const handleClick = () => {
        setRenderSearchDropdown(false);
        setSearchQuery('');
    }

    return(
        <div className='dropdown search-dropdown'>
            <i onClick={handleClick} className="fas fa-times fa-2x"></i>
            {searchResults.length ?
                searchResults.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`} onClick={handleClick}>
                    {`${product.brand} ${product.name}`}
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
