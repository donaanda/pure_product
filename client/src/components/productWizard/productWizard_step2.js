import React, { Component } from 'react';

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div className="wizard-div cruelty-free">
        <h3>I would like products that are...</h3>
        <form>
          <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="cruelty_free" /> <label id="wiz-label">cruelty free</label></div>
          <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="vegan" /> <label id="wiz-label">vegan</label></div>
        </form>
      </div>
    );
  }
}

export default Step2;