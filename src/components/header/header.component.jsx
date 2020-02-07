import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectHidden } from '../../redux/cart/cart.selectores';
import { selectCurrentUser } from '../../redux/user/user.selectores';


import { HeaderContainer, LogoContainer, Logo, OptionsContainer, LinkOption } from './header.styles';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <LinkOption to='/shop'>SHOP</LinkOption>
            <LinkOption to='/contact'>CONTACT</LinkOption>
            {currentUser ?
                <LinkOption as='div' onClick={() => auth.signOut()}>LOG OUT</LinkOption>
                :
                <LinkOption to='/signin'>SIGN IN</LinkOption>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropDown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
});

export default connect(mapStateToProps)(Header);