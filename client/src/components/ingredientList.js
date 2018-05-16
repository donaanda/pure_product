import React from 'react';
import heart from '../assets/images/landing_page_icons/gentle_heart.png';
import cross from '../assets/images/landing_page_icons/safety.png';
import '../assets/css/ingredientList.css';

export default (props) => {
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
        width:'10%'
    }
    const img = {
        width: '80%'
    }

    return (
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
                        <td className="chemical-gentle-rating" style={rate}>1</td>
                        <td className="chemical-safety-rating" style={rate}>2</td>
                    </tr>
                    <tr>
                        <td style={chemical}>dimethicone</td>
                        <td className="chemical-gentle-rating" style={rate}>2</td>
                        <td className="chemical-safety-rating" style={rate}>2</td>
                    </tr>
                    <tr>
                        <td style={chemical}>talc</td>
                        <td className="chemical-gentle-rating" style={rate}>5</td>
                        <td className="chemical-safety-rating" style={rate}>3</td>
                    </tr>
                    <tr>
                        <td style={chemical}>peg-10</td>
                        <td className="chemical-gentle-rating" style={rate}>5</td>
                        <td className="chemical-safety-rating" style={rate}>7</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}