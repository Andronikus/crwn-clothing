import React from 'react';
import Spinner from '../spinner/spinner.component';


const WithSpinner = WrapperComponent => {

    return ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner />
        ) :
            <WrapperComponent {...otherProps} />
    }
}

export default WithSpinner;