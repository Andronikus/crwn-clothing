import React from 'react';

import { Container, Text } from "./textAsLink.styles";

const TextAsLink = ({ clickHandler, text }) => {

    return (
        <Container onClick={clickHandler}>
            <Text>{text}</Text>
        </Container>
    )
}

export default TextAsLink;