import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorMessage: null };
    }

    componentDidCatch(error, errorMessage) {
        this.setState({
            error: error,
            errorMessage: errorMessage
        })
    }

    render() {
        if(this.state.errorMessage) {
            return(
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorMessage.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}