

const SearchFilters = ({ productResults }) => {

    return (
        <div>
            <b>Categories</b>
            {productResults.map(product =>
                <>
                    <input type='checkbox' id={product.brand} name={`${product.brand}`}></input>
                    <label for={`${product.brand}`}>{`${product.brand}`}</label>
                </>
            )}

        </div>
    )
}

export default SearchFilters;
