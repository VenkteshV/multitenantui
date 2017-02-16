export function typesHasErrored(bool) {
    return {
        type: 'TYPES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function typesIsLoading(bool) {
    return {
        type: 'TYPES_IS_LOADING',
        isLoading: bool
    };
}

export function typesFetchDataSuccess(types) {
    return {
        type: 'TYPES_FETCH_DATA_SUCCESS',
      types
    };
}

export function typesFetchData(url) {
    return (dispatch) => {
        dispatch(typesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(typesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((types) => dispatch(typesFetchDataSuccess(types)))
            .catch(() => dispatch(typesHasErrored(true)));
    };
}
