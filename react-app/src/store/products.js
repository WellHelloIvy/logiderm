const LOAD_PRODUCTS = 'product/LOAD_PRODUCTS';

const loadProducts = (data) => ({
    type: LOAD_PRODUCTS,
    data
})

export const getProducts = () => async (dispatch) => {
    const response = await fetch('/api/products')
        if(response.ok) {
            const data = await response.json();
            dispatch(loadProducts(data));
            return null;
        }
}

const initialState = {}

export default function reducer (state=initialState, action) {
    const copyState = {...state}
    switch (action.type) {
        case LOAD_PRODUCTS:
            action.data.products.forEach(product => {
                copyState[product.id] = product
            });
            return copyState
        default:
            return state;
    }
}
