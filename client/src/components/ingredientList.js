import React from 'react';
import heart from '../assets/images/landing_page_icons/gentle_heart.png';
import cross from '../assets/images/landing_page_icons/safety.png';

export default ()=>{
    const chemical = {
        border: '1px solid',
        width: '70%'
    };
    const table = {
        borderCollapse: 'collapse',
        width: '80vw',
        margin: 'auto',
        marginTop: '5%'
    }
    const rate = {
        border: '1px solid',
        width:'10%'
    }
    const img = {
        width: '80%'
    }
    return(
        <div>
            <table style={table}>
                <tbody>
                    <tr>
                        <td>Ingredients</td>
                        <td><img style={img} src={heart} alt="heart"/></td>
                        <td><img style={img} src={cross} alt="heart"/></td>
                    </tr>
                    <tr>
                        <td style={chemical}>water</td>
                        <td style={rate}>1</td>
                        <td style={rate}>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}