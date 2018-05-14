
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class ProductFinder extends Component {
    render() {
        return (
            <section className="product_finder">
                <Header />
                <form className="product_finder">
                    <div>
                        <h2>I would like to find something with these ingredients...</h2>
                        <div><input type="checkbox" name="alpha-hydroxy-acids" /> <label>alpha-hydroxy acids</label></div>
                        <div><input type="checkbox" name="beta-hydroxy-acid" /> <label>beta-hydroxy acid</label></div>
                        <div><input type="checkbox" name="retinol" /> <label>retinol</label></div>
                        <div><input type="checkbox" name="l-ascorbic-acid" /> <label>L-Ascorbic Acid</label></div>
                        <div><input type="checkbox" name="hyaluronic-acid" /> <label>Hyaluronic Acid</label></div>
                        <h2>I would like to avoid...</h2>
                        <div><input type="checkbox" name="parabens" /> <label>parabens</label></div>
                        <div><input type="checkbox" name="phthalates" /> <label>phthalates</label></div>
                        <div><input type="checkbox" name="triclosan" /> <label>triclosan</label></div>
                        <div><input type="checkbox" name="sodium lauryl sulfate" /> <label>sodium lauryl sulfate</label></div>
                        <div><input type="checkbox" name="aminophenol" /> <label>aminophenol</label></div>
                        <div><input type="checkbox" name="diaminobenzene" /> <label>diaminobenzene</label></div>
                        <div><input type="checkbox" name="phenylenediamine" /> <label>phenylenediamine</label></div>
                        <div><input type="checkbox" name="polyethylene" /> <label>polyethylene</label></div>
                        <div><input type="checkbox" name="PEGs" /> <label>PEGs</label></div>
                        <div><input type="checkbox" name="banned" /> <label>Anything banned by the EU</label></div>
                        <div><input type="checkbox" name="restricted" /> <label>Anything restricted by the EU</label></div>
                        <button>Submit</button>
                    </div>
                </form>
                <Footer />
            </section>
        )
    }
}

export default ProductFinder;