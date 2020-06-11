import React, { useState, useEffect } from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import TextAsLink from "../../components/textAsLink/textAsLink.component";

import "./signin-signup.styles.scss";

const SignInSignUp = () => {
  const [smallDevice, setSmallDevice] = useState(false);
  const [showSignin, setshowSignin] = useState(true);

  useEffect(() => {
    const isSmall = isSmallDevice(window.innerWidth, 800);
    setSmallDevice(isSmall);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function isSmallDevice(currentWidth, referenceWidth) {
    return currentWidth <= referenceWidth;
  }

  function resizeHandler() {
    setSmallDevice(isSmallDevice(window.innerWidth, 800));
  }

  const onClickHandler = () => {
    setshowSignin(!showSignin);
  };

  let htmlToShow = (
    <>
      <SignIn />
      <SignUp />
    </>
  );

  if (smallDevice) {
    if (showSignin) {
      htmlToShow = (
        <>
          <SignIn />
          <TextAsLink
            clickHandler={onClickHandler}
            text="Dont have an account yet?"
          />
        </>
      );
    } else {
      htmlToShow = (
        <>
          <SignUp />
          <TextAsLink clickHandler={onClickHandler} text="Take me to login!" />
        </>
      );
    }
  }

  return <div className="signIn-signUp">{htmlToShow}</div>;
};

export default SignInSignUp;
