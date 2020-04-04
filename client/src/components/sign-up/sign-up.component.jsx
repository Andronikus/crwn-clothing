import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sig-up.styles.scss";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("password and confirm password does not match :(");
      return;
    }

    signUpStart(displayName, email, password);
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account!</h2>
        <span> Sign up with your email and passord</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            type="text"
            name="displayName"
            label="display name"
            value={displayName}
            changeHandler={this.onChangeHandler}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            changeHandler={this.onChangeHandler}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            changeHandler={this.onChangeHandler}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={confirmPassword}
            changeHandler={this.onChangeHandler}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
