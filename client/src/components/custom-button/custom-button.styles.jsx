import styles, { css } from "styled-components";

const styleButton = css`
  background-color: black;
  color: white;
  border: none;
`;

const styleGoogleButton = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ac8;
    color: white;
    border: none;
  }
`;

const styleInvertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const styleButtonFromProps = (props) => {
  if (props.isGoogleSignIn) {
    return styleGoogleButton;
  }

  return props.invertStyle ? styleInvertedButton : styleButton;
};

export const CustomButtonContainer = styles.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    ${styleButtonFromProps}
`;
