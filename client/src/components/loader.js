import React from 'react';
import '../assets/css/loader.css';

export default (props) => {
    console.log(props);
    return(
        <div className="loader-container">
    <div className={props.className}></div>
        </div>
)
}