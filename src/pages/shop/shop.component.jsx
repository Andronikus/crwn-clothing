import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


import { firestore, createShopItemsFromCollectionsSnapshoot } from '../../firebase/firebase.utils';
import { updateShop } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateShop } = this.props;
        const collectionsRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async onSnapshot => {
            updateShop(createShopItemsFromCollectionsSnapshoot(onSnapshot));
            this.setState({ isLoading: false });
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
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateShop: collectionMap => dispatch(updateShop(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);