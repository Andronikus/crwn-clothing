import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import { firestore, createShopItemsFromCollectionsSnapshoot } from '../../firebase/firebase.utils';
import { updateShop } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateShop } = this.props;
        const collectionsRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async onSnapshot => {
            updateShop(createShopItemsFromCollectionsSnapshoot(onSnapshot));
        })

    }

    componentWillUnmount() {
        if (this.unsubscribeFromSnapshot) {
            console.log('will unsubcribe....', this.unsubscribeFromSnapshot);
            this.unsubscribeFromSnapshot();
        }
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateShop: collectionMap => dispatch(updateShop(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);