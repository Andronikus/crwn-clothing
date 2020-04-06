import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account!</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          changeHandler={onChangeHandler}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          changeHandler={onChangeHandler}
          required
        />
        <div className="buttons-container">
          <CustomButton type="submit"> SIGN IN </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            {" "}
            SIGN IN WITH GOOGLE{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
