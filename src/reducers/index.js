import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { types, typesHasErrored, typesIsLoading } from './types';
import { categories, categoriesHasErrored, categoriesIsLoading } from './categories';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    types,
    typesHasErrored,
    typesIsLoading,
    categories,
    categoriesHasErrored,
    categoriesIsLoading
});
