import React, { Component } from 'react';

class Step4 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <div className="wizard-div products-want">
        <h4>I want something that DOES have...</h4>
        <form>
          <div><input id="wizard-input" type="checkbox" name="alpha-hydroxy-acid" /> <label id="wiz-label">alpha-hydroxy acid</label></div>
          <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" name="beta-hydroxy-acid" /> <label id="wiz-label">beta-hydroxy acid</label></div>
          <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" name="retinol" /> <label id="wiz-label">retinol</label></div>
          <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" name="l-ascorbic-acid" /> <label id="wiz-label">L-Ascorbic Acid</label></div>
          <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" name="hyaluronic-acid" /> <label id="wiz-label">Hyaluronic Acid</label></div>
        </form>
      </div>
    );
  }
}

export default Step4;