import shopActionTypes from './shop.action.types.js';

export const updateShop = (collectionMap) => {
    return {
        type: shopActionTypes.UPDATE_SHOP,
        payload: collectionMap
    }
}