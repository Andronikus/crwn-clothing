import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
})


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);


export default CollectionPageContainer;