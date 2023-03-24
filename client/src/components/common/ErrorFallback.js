import React from 'react';

const ErrorFallback = ({error}) => {
    return (
        <div className="text-center" role="alert">
            <p className="text-danger">Something went wrong:</p>
            <pre style={{color: "red"}}>{error.message}</pre>
        </div>
    )
}

export default ErrorFallback;
