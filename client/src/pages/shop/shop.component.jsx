import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStart } = this.props;
        fetchCollectionStart();
    }

    render() {
        const { match } = this.props;

        console.log({match});
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionOverviewContainer} 
                />
                <Route 
                    path={`${match.path}/:categoryId`}
                    component={CollectionPageContainer} 
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);