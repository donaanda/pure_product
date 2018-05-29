import React, { Component } from 'react';

class Step5 extends React.Component {
    render() {
      if (this.props.currentStep !== 5) {
        return null;
      } 
      return(
        <div className="wizard-div rating-selector">
            <h4>I want something that has these ratings...</h4>
            <form>
                <div className="wiz-safe-gen-cont">
                    <h5>Safety:</h5>
                    <p>Between</p>
                    <input id="num-input" type="number" name="quantity" min="1" max="10"/>
                    <p>And</p>
                    <input id="num-input" type="number" name="quantity" min="1" max="10"/>
                </div>
                <div className="wiz-safe-gen-cont">
                    <h5>Gentle:</h5>
                    <p>Between</p>
                    <input id="num-input" type="number" name="quantity" min="1" max="10"/>
                    <p>And</p>
                    <input id="num-input" type="number" name="quantity" min="1" max="10"/>
                </div>
            </form>
        </div>
     );
   }
}

export default Step5;