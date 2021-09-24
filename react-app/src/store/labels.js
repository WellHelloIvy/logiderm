const LOAD_LABELS = 'labels/LOAD_LABELS';

const loadLabels = (data) => ({
    type: LOAD_LABELS,
    data
});

export const getLabels = () => async (dispatch) => {
    const responseCategories = await fetch('/api/categories/');
    const responseAttributes = await fetch('/api/attributes/');
    const responseConcerns = await fetch('/api/concerns/');
    const responseSkinTypes = await fetch('/api/skintypes/');
    if (responseCategories.ok && responseAttributes.ok && responseConcerns.ok && responseSkinTypes.ok) {
        const data = {}
        const resCategories = await responseCategories.json();
        const resAttributes = await responseAttributes.json();
        const resConcerns = await responseConcerns.json();
        const resSkinTypes = await responseSkinTypes.json();
        data.categories = resCategories.categories;
        data.attributes = resAttributes.attributes;
        data.concerns = resConcerns.concerns;
        data.skinTypes = resSkinTypes.skinTypes;
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
            let allConcerns = {}
            let allSkinTypes = {}
            action.data.categories.forEach(category => {
                allCategories[category.id] = category.name
            });
            action.data.attributes.forEach(attribute => {
                allAttributes[attribute.id] = attribute.name
            });
            action.data.concerns.forEach(concern => {
                allConcerns[concern.id] = concern.name
            });
            action.data.skinTypes.forEach(skinType => {
                allSkinTypes[skinType.id] = skinType.name
            });
            return {
                ...state,
                categories: { ...allCategories },
                attributes: {...allAttributes},
                concerns: {...allConcerns},
                skinTypes: {...allSkinTypes}
            }
        default:
            return state;
    }
}
