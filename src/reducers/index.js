import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { types, typesHasErrored, typesIsLoading } from './types';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    types,
    typesHasErrored,
    typesIsLoading
});
