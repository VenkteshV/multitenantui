export function typesHasErrored(state = false, action) {
    switch (action.type) {
        case 'TYPES_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function typesIsLoading(state = false, action) {
    switch (action.type) {
        case 'TYPES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function types(state = [], action) {
    switch (action.type) {
        case 'TYPES_FETCH_DATA_SUCCESS':
            return action.types;

        default:
            return state;
    }
}
