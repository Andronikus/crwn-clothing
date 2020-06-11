import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sig-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userInfo;

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password and confirm password does not match :(");
      return;
    }

    signUpStart(displayName, email, password);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account!</h2>
      <span> Sign up with your email and passord</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type="text"
          name="displayName"
          label="display name"
          value={displayName}
          changeHandler={onChangeHandler}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          changeHandler={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          changeHandler={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirm password"
          value={confirmPassword}
          changeHandler={onChangeHandler}
          required
        />
        <div className="buttons-container">
          <CustomButton type="submit">SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
