import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-signup.styles.scss'

const SignInSignUp = () => (
    <div className='signIn-signUp'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;