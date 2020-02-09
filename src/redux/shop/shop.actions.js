import shopActionTypes from './shop.action.types.js';
import { firestore, createShopItemsFromCollectionsSnapshoot } from '../../firebase/firebase.utils';

export const updateShop = (collectionMap) => {
    return {
        type: shopActionTypes.UPDATE_SHOP,
        payload: collectionMap
    }
}

const fetchCollectionStart = () => {
    return {
        type: shopActionTypes.FETCHING_COLLECTION_START
    }
}

const fetchCollectionSuccess = collectionMap => {
    return {
        type: shopActionTypes.FETCHING_COLLECTION_SUCCESS,
        payload: collectionMap
    }
}


const fetchCollectionFailure = errorMessage => {
    return {
        type: shopActionTypes.FETCHING_COLLECTION_FAILURE,
        payload: errorMessage
    }
}

export const fetchShopCollectionsAsync = () => {
    return dispatch => {
        // start fetching data
        dispatch(fetchCollectionStart());
        // pull data from firestore
        firestore.collection('collections').get()
            .then(collectionMap => {
                const shopCollectionItems = createShopItemsFromCollectionsSnapshoot(collectionMap);
                dispatch(fetchCollectionSuccess(shopCollectionItems));
            })
            .catch(error => dispatch(fetchCollectionFailure(error)));
    }
}