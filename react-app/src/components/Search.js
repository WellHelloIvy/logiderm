import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = ({ searchQuery, setSearchQuery, setRenderSearchDropdown}) => {
    const products = Object.values(useSelector(state => state.products))

    const searchResults = products?.filter(product => product.name.toLowerCase().includes(searchQuery?.toLowerCase()))

    const handleClick = () => {
        setRenderSearchDropdown(false);
        setSearchQuery('');
    }

    return(
        <div className='dropdown'>
            {searchResults.length ?
                searchResults.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`} onClick={handleClick}>
                    {product.name}
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
