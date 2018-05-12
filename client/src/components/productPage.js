import React from 'react';
import Tabs from './tabs';

const ProductPagef = () => {
    const page = {
        position:'fixed',
        bottom: '0px'
    }
    return(
    <div>
        <div style={page}>
            <Tabs/>
        </div>
    </div>
    )
};

export default ProductPage;