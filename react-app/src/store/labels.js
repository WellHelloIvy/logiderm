const LOAD_LABELS = 'labels/LOAD_LABELS';

const loadLabels = (data) => ({
    type: LOAD_LABELS,
    data
});

export const getLabels = () => async (dispatch) => {
    const responseCategories = await fetch('/api/categories/');
    const responseAttributes = await fetch('/api/attributes/');
    const responseConcerns = await fetch('/api/concerns/');
    if (responseCategories.ok && responseAttributes.ok && responseConcerns.ok) {
        const data = {}
        const resCategories = await responseCategories.json();
        const resAttributes = await responseAttributes.json();
        const resConcerns = await responseConcerns.json();
        data.categories = resCategories.categories;
        data.attributes = resAttributes.attributes;
        data.concerns = resConcerns.concerns;
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
            let allConcerns ={}
            action.data.categories.forEach(category => {
                allCategories[category.id] = category.name
            });
            action.data.attributes.forEach(attribute => {
                allAttributes[attribute.id] = attribute.name
            });
            action.data.concerns.forEach(concern => {
                allConcerns[concern.id] = concern.name
            });
            return {
                ...state,
                categories: { ...allCategories },
                attributes: {...allAttributes},
                concerns: {...allConcerns}
            }
        default:
            return state;
    }
}
