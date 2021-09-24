const LOAD_LABELS = 'labels/LOAD_LABELS';

const loadLabels = (data) => ({
    type: LOAD_LABELS,
    data
});

export const getLabels = () => async (dispatch) => {
    const response = await fetch('/api/categories/');
    if (response.ok) {
        const data = {}
        const res = await response.json();
        data.categories = res.categories;
        dispatch(loadLabels(data))
    }
}

const initialState = {
    concerns: {},
    attributes: {},
    skinTypes: {},
    categories: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_LABELS:
            let allCategories = {}
            action.data.categories.forEach(category => {
                allCategories[category.id] = category.name
            });
            return {
                ...state,
                categories: { ...allCategories }
            }
        default:
            return state;
    }
}
