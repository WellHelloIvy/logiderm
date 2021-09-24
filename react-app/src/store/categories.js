const LOAD_CATEGORIES = 'categories/LOAD_CATEGORIES';

const loadCategories = (data) => ({
    type: LOAD_CATEGORIES,
    data
});

export const getCategories = () => async (dispatch) => {
    const response = await fetch('api/categories');
    if (response.ok) {
        const data = {}
        const res = await response.json();
        data.categories = res.categories;
        dispatch(loadCategories(data))
    }
}

const initialState = { labels : { categories: {} } }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            let allCategories = {}
            action.data.categories.forEach(category => {
                allCategories[category.id] = category
            });
            return {
                ...state,
                categories: { ...allCategories }
            }
        default:
            return state;
    }
}
