import React from 'react';
import "./LoadingSpinner.css";

type LoadingSpinnerProps = {}

function LoadingSpinner(props: LoadingSpinnerProps) {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
    );
}

export default LoadingSpinner;