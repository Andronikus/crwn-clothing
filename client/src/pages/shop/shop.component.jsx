import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";


const CollectionOverviewContainer = lazy(() => import("../../components/collection-overview/collection-overview.container"));
const CollectionPageContainer = lazy(() => import("../../pages/collection/collection.container"));


const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);
  // fetchCollectionStart will not change... so it will simulate componentDidMount


  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
