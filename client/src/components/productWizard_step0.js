import React, { Component } from 'react';

class Step1 extends React.Component {
    render() {
      if (this.props.currentStep !== 0) {
        return null;
      } 
      return(
        <div className="wizard-div wiz-intro-cont">
            <h3>Product Finder</h3>
            <h5>This tool allows you to specify what kind of products you're looking for, and gives you the result.</h5>
            <h4>Let's get started!</h4>
        </div>
     );
   }
}

export default Step1;