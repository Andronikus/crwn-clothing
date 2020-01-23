import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    onChangeHandler = e => {
        e.preventDefault();

        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account!</h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.onSubmitHandler}>
                    <FormInput 
                        name='email' 
                        type='email'
                        label='email'
                        value={this.state.email} 
                        changeHandler={this.onChangeHandler} 
                        required/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password} 
                        changeHandler={this.onChangeHandler} 
                        required/>
                    <CustomButton name='signin' type="submit" > SIGN IN </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;