import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { types, typesHasErrored, typesIsLoading } from './types';
import { categories, categoriesHasErrored, categoriesIsLoading } from './categories';
import { tasks, tasksHasErrored, tasksIsLoading } from './tasks';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    types,
    typesHasErrored,
    typesIsLoading,
    categories,
    categoriesHasErrored,
    categoriesIsLoading,
    tasks,
    tasksHasErrored,
    tasksIsLoading
});
