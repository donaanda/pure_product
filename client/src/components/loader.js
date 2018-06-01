import React from 'react';
import '../assets/css/loader.css';

export default (props) => {
    return (
        <div className="loader-container">
            <div className={props.className}></div>
        </div>
    )
}