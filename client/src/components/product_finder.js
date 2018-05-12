
import React, { Component } from 'react';

class ProductFinder extends Component {
    render() {
        return (
            <form className="product_finder">
                <label>I would like to find something with these ingredients...</label>
                <input type="checkbox" name="alpha-hydroxy-acids">alpha-hydroxy acids</input>
                <input type="checkbox" name="beta-hydroxy-acid">beta-hydroxy acid</input>
                <input type="checkbox" name="retinol">retinol</input>
                <input type="checkbox" name="l-ascorbic-acid">L-Ascorbic Acid</input>
                <input type="checkbox" name="hyaluronic-acid">Hyaluronic Acid</input>
                <label>I would like to avoid...</label>
                <input type="checkbox" name="parabens">parabens</input>
                <input type="checkbox" name="phthalates">phthalates</input>
                <input type="checkbox" name="triclosan">triclosan</input>
                <input type="checkbox" name="sodium lauryl sulfate">sodium lauryl sulfate</input>
                <input type="checkbox" name="aminophenol">aminophenol</input>
                <input type="checkbox" name="diaminobenzene">diaminobenzene</input>
                <input type="checkbox" name="phenylenediamine">phenylenediamine</input>
                <input type="checkbox" name="polyethylene">polyethylene</input>
                <input type="checkbox" name="PEGs">PEGs</input>
                <button>Submit</button>
            </form>
        )
    }
}

export default ProductFinder;