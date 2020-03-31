import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollection = collectionItem =>
    createSelector([selectCollections], collections => collections[collectionItem])

export const selectCollectionAlreadyDefined = createSelector([selectShop], shop => {
    return !!shop.collections;
});

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.collections === undefined);