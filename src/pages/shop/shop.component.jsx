import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchShopCollectionsAsync } from '../../redux/shop/shop.actions';
import { selectCollectionAlreadyDefined } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchShopCollectionsAsync } = this.props;
        fetchShopCollectionsAsync();
    }

    render() {
        const { match, collectionAlreadyDefined } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!collectionAlreadyDefined} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={!collectionAlreadyDefined} {...props} />} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    collectionAlreadyDefined: selectCollectionAlreadyDefined
})

const mapDispatchToProps = dispatch => ({
    fetchShopCollectionsAsync: () => dispatch(fetchShopCollectionsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);