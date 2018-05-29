import React, { Component } from 'react';

class Step6 extends React.Component {
render() {
    if (this.props.currentStep !== 6) {
      return null;
    } 
    return(
            <div className="wizard-div price-selector">
                <h4>Between these prices...</h4>
                <form>
                <input id="num-input" type="number" name="quantity" min="1" max="10"/>
                <h6>And</h6>
                <input id="num-input" type="number" name="quantity" min="1" max="10"/>
                <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default Step6;