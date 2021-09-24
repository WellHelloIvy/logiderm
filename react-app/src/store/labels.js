const LOAD_LABELS = 'labels/LOAD_LABELS';

const loadLabels = (data) => ({
    type: LOAD_LABELS,
    data
});

export const getLabels = () => async (dispatch) => {
    const responseCategories = await fetch('/api/categories/');
    const responseAttributes = await fetch('/api/attributes/');
    if (responseCategories.ok && responseAttributes.ok) {
        const data = {}
        const resCategories = await responseCategories.json();
        const resAttributes = await responseAttributes.json();
        data.categories = resCategories.categories;
        data.attributes = resAttributes.attributes;
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
            let allAttributes = {}
            action.data.categories.forEach(category => {
                allCategories[category.id] = category.name
            });
            action.data.attributes.forEach(attribute => {
                allAttributes[attribute.id] = attribute.name
            });
            return {
                ...state,
                categories: { ...allCategories },
                attributes: {...allAttributes}
            }
        default:
            return state;
    }
}
