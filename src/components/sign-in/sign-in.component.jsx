import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmitHandler = async e => {
        e.preventDefault();
        console.log('sing-in - onSubmitHandler');
        const {email, password} = this.state;

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log('userCredential', userCredential);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    }

    onChangeHandler = e => {
        e.preventDefault();

        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        const { email, password} = this.state;
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account!</h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.onSubmitHandler}>
                    <FormInput 
                        name='email' 
                        type='email'
                        label='email'
                        value={email} 
                        changeHandler={this.onChangeHandler} 
                        required/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={password} 
                        changeHandler={this.onChangeHandler} 
                        required/>
                    <div className='buttons-container'>
                        <CustomButton type="submit" > SIGN IN </CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;