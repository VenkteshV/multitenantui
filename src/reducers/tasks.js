const defaultState={
  posting: false
}
export function tasksHasErrored(state = false, action) {
    switch (action.type) {
        case 'TASKS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function tasksIsLoading(state = false, action) {
    switch (action.type) {
        case 'TASKS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function tasks(state = defaultState, action) {
    switch (action.type) {
        case 'TASKS_FETCH_DATA_SUCCESS':
            return action.tasks;
        case "TASKS_POST_DATA": {
          return {
              ...state,
              posting: true,
      }
    }
        default:
            return state;
    }
}
