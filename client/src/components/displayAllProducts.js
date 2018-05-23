import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';

const DisplayAllProducts = (props) => {
    console.log(props);
    if (props.data.data === null) {
        return <div>Loading...</div>
    } else if(!props.data.success){
        return <div>No Result Found</div>
    } else {
        let products = props.data.data.map((item, index) => {
            return (
                <DisplayImage key={index} product={item} />
            )
        });

        return (
            <div className="display-all-products-content">
                {products}
            </div>
        )
    }
}

export default DisplayAllProducts;