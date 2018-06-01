import React from 'react';
import '../assets/css/loader.css';
import load from '../assets/images/landing_page_icons/suppliers.gif';

export default (props) => {
    return (
        <div className="loader-container">
            {/* <div className={props.className}></div> */}
            <img src={load} className={props.className} />
        </div>
    )
}