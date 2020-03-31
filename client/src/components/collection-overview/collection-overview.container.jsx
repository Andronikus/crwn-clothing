import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionOverview from './collection-overview.component';
import { selectCollectionAlreadyDefined } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';


const mapStateToProps = createStructuredSelector({
    // isLoading: selectIsCollectionFetching
    isLoading: (state) => !selectCollectionAlreadyDefined(state)
})

// connect(mapStateToProps)(WithSpinner(CollectionOverview))
// compose:: better way to compose nested functions.
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
