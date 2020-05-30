import React from 'react';

import style from './error-boundary.style.css';

import { ErrorBoundaryContainer, ErrorBoundaryImage, ErrorBoundaryText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // if something will kaput in some of children component this 
        // method will be called
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        // side effect with error... sending to endpoint, db, etc
        console.log(error);
        console.log("hasError: ", this.state.hasError);
    }

    render() {

        console.log("ErrorBoundary:: render: ", this.state.hasError);

        if (this.state.hasError) {
            return (<ErrorBoundaryContainer>
                <ErrorBoundaryImage imageUrl="https://i.imgur.com/3suxlvm.png" />
                <ErrorBoundaryText>Ops! Something went wrong...</ErrorBoundaryText>
            </ErrorBoundaryContainer>);
        }

        return this.props.children;

        // return this.state.hasError ? <div>Ops! Something went wrong!</div> : this.props.children;
    }
}

export default ErrorBoundary;