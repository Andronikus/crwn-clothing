import React from 'react';
import { render } from '@testing-library/react'
import TestRenderer from 'react-test-renderer';


import CustomButton from '../custom-button.component';

it('render properly the button component', () => {
    const buttonComponent = TestRenderer.create(<CustomButton>Sign In</CustomButton>).toJSON();
    expect(buttonComponent).toMatchSnapshot();
})
