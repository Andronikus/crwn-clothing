import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ErrorBoundaryImage = styled.div`
    background-image: ${props => `url(${props.imageUrl});`};
    background-size: cover;
    background-position: center;
    width: 40vh;
    height: 40vh;
`

export const ErrorBoundaryText = styled.h2`
    color: rgb(40, 29, 194);
`