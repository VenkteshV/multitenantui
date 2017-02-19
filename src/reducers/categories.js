const defaultState={
  posting: false
}
export function categoriesHasErrored(state = false, action) {
    switch (action.type) {
        case 'CATEGORIES_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function categoriesIsLoading(state = false, action) {
    switch (action.type) {
        case 'CATEGORIES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function categories(state = defaultState, action) {
    switch (action.type) {
        case 'CATEGORIES_FETCH_DATA_SUCCESS':
            return action.categories;
        case "CATEGORIES_POST_DATA": {
          return {
              ...state,
              posting: true,
      }
    }
        default:
            return state;
    }
}
