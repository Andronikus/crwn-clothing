import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, invertStyle, ...otherProps }) => (
    <button className={`${invertStyle ? 'invert-colors' : ''} ${isGoogleSignIn ? 'google-button' : ''} custom-button`} {...otherProps}>{children}</button>
);

export default CustomButton;